//import Signup from '../components/Signup';
import Signin from '../components/Signin';
import styled from 'styled-components';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
`;

export default function SignupPage() {
  return (
    <Columns>
      <div></div>
      <Signin />
      <div></div>
    </Columns>
  );
}
