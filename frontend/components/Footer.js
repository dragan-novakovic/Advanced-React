import { Phone, Email } from './assets/icons';

export default function Footer() {
  return (
    <footer style={{ display: 'flex' }}>
      <span style={{ fontSize: '1.7rem', padding: 5 }}>KONTAKT:</span> <Phone />
      <span style={{ paddingLeft: 10, fontSize: '1.7rem', padding: 5 }}>
        <i>065-923-2342</i>
      </span>
    </footer>
  );
}
