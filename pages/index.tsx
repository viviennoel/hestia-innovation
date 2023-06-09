import { createClient } from "../prismicio";
import { BannerHome } from "../components/organism/BannerHome";
import styles from "./pages.module.scss";
import Button from 'react-bootstrap/Button';
import { Highlights } from '../components/organism/Highlights';

const Index = ({header}) => {

  return (
      <div>
        <BannerHome />
        <Button variant="light" className={styles.ctaContact}>Contact us</Button>
        <Highlights />
      </div>
  );
};

export default Index;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const header = await client.getSingle("header");
  console.log(header)
  
  return {
    props: {
      header
    },
  };
}