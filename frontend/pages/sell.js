import CreateItem from '../components/CreateItem';
import PleaseSignIn from '../components/PleaseSignin';

export default function Sell() {
  return (
    <div>
      <PleaseSignIn>
        <CreateItem />
      </PleaseSignIn>
    </div>
  );
}
