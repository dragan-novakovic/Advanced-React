import UpdateItem from '../components/UpdateItem';

export default function Update({ query }) {
  return (
    <div>
      <UpdateItem id={query.id} />
    </div>
  );
}
