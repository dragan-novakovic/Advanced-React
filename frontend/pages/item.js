import SingleItem from '../components/SingleItem';

export default function Item({ query }) {
  return (
    <div>
      <SingleItem id={query.id} />
    </div>
  );
}
