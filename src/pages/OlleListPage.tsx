import styled from 'styled-components';
import { olle } from 'apis/olle';
import { useEffect, useState } from 'react';
import { CustomError, Olle } from 'global/types';

export const OlleListPage = () => {
  const [olleList, setOlleList] = useState<Olle[]>();
  const fetchOlleList = async () => {
    try {
      const fetchedData = await olle.getOlleList();
      const olleList = fetchedData.map((data: Olle) => ({
        applies_count: data.applies_count,
        contact: data.contact,
        course: data.course,
        nickname: data.nickname,
        prefer_gender: data.prefer_gender,
        route: data.route,
        start_date: data.start_date,
        title: data.title,
      }));
      setOlleList(olleList);
    } catch (err) {
      const error = err as CustomError;
      alert(error.message);
    }
  };
  useEffect(() => {
    fetchOlleList();
  }, []);

  console.log(olleList);

  return (
    <Wrapper>
      <Box>{olleList && olleList.map((olle) => <div>{olle.title}</div>)}</Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: inherit;
  height: 100%;
  padding: 2rem;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
