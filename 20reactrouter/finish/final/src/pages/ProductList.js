import { useSearchParams, useLocation } from 'react-router-dom';

export const ProductList = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams);
  // console.log(searchParams.get('q'));
  // console.log(
  //   searchParams.get('keyword'),
  //   searchParams.get('instock'),
  //   searchParams.get('rating')
  // );

  const location = useLocation();
  console.log(location);

  return (
    <main>
      <div className="component">ProductList</div>
    </main>
  );
};
