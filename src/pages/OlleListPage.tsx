import styled from 'styled-components';
import { olle } from 'apis/olle';
import { useEffect, useState, useRef } from 'react';
import { CustomError, Olle } from 'global/types';
import { theme } from 'styles/theme';
import { useIntersectionObserver } from 'hooks/useIntersectionObserver';

interface PostListBottomProps {
  continueFetching: boolean;
}

export const OlleListPage = () => {
  const [olleList, setOlleList] = useState<Olle[]>([]);
  const [olleListPage, setOlleListPage] = useState<number>(0);
  const [continueFetching, setContinueFetching] = useState<boolean>(true);
  const intersectRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const { isIntersect } = useIntersectionObserver(intersectRef, {
    root: rootRef.current,
    rootMargin: '50px',
    threshold: 0.01,
  });
  const COUNT = 2;

  const fetchOlleList = async () => {
    try {
      const fetchedData = await olle.getOlleList(olleListPage, COUNT);
      if (fetchedData.length === 0) {
        setContinueFetching(false);
        return;
      }

      const olleList = fetchedData.map((data: Olle) => ({
        applies_count: data.applies_count,
        contact: data.contact,
        course: data.course,
        prefer_gender: data.prefer_gender,
        route: data.route,
        start_date: data.start_date,
        title: data.title,
        olle_id: data.olle_id,
        olle_writer: data.olle_writer,
      }));
      setOlleList((prev) => [...prev, ...olleList]);
    } catch (err) {
      const error = err as CustomError;
      alert(error.message);
    }
  };

  useEffect(() => {
    if (continueFetching) {
      fetchOlleList();
    }
  }, [olleListPage]);

  useEffect(() => {
    if (isIntersect && olleList.length >= 0 && olleListPage >= 0) {
      setOlleListPage((prev) => {
        return prev + COUNT;
      });
    }
  }, [isIntersect]);

  const preferGenderText = (preferGender: number) => {
    switch (preferGender) {
      case 0:
        return <div>상관없어요</div>;
      case 1:
        return <div>여성분과 동행할래요</div>;
      case 2:
        return <div>남성분과 동행할래요</div>;
      default:
        return;
    }
  };

  return (
    <Wrapper>
      <FavoriteSelectTitle>{'말동무와 도란도란'}</FavoriteSelectTitle>
      <Box>
        {olleList &&
          olleList.map((olle) => (
            <OlleWrapper key={olle.olle_id}>
              <ProfileImage src={olle.olle_writer.profile_image_url} />
              <ContentsWrapper>
                <Title>{olle.title}</Title>
                <Nickname>{olle.olle_writer.nickname}</Nickname>
                <DetailedInfo>
                  {preferGenderText(olle.prefer_gender)}
                  <div> {olle.start_date.split('T')[0]}</div>
                </DetailedInfo>
              </ContentsWrapper>
            </OlleWrapper>
          ))}
      </Box>
      <PostListBottom continueFetching={continueFetching} ref={intersectRef}>
        LOADING...
      </PostListBottom>
    </Wrapper>
  );
};

const PostListBottom = styled.div<PostListBottomProps>`
  ${({ continueFetching }) =>
    !continueFetching &&
    `
    display: none !important;
  `}
  text-align: center;
  padding: 1rem 0;
`;

const Wrapper = styled.div`
  min-height: 100%;
  padding: 1.5rem;
  background: #f5f5f5;
`;

const FavoriteSelectTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  padding: 0.5rem 0;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const OlleWrapper = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  background: ${theme.color.white};
  border: 1px solid #e1e1e8;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  margin-right: 5px;
`;
const ContentsWrapper = styled.div`
  width: 100%;
  padding: 1rem 0.5rem;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Nickname = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${theme.color.grey};
`;

const DetailedInfo = styled.div`
  display: flex;
  font-size: 15px;
  justify-content: space-between;
  color: ${theme.color.grey};
`;
