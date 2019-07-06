import { Phone, Email } from './assets/icons';

export default function Footer() {
  return (
    <footer
      style={{ display: 'flex', fontSize: '1.7rem', flexDirection: 'column' }}
    >
      <span style={{ padding: 5 }}>KONTAKT: </span>
      <span />
      <span style={{ paddingLeft: 10, fontSize: '1.7rem', padding: 5 }}>
        <i>
          {' '}
          <Phone />
          064/120-45-45
        </i>
      </span>
      <span>Adresa: Vodna 9, Sremska Mitrovica</span>
    </footer>
  );
}
