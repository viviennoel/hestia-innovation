import { createClient } from "../prismicio";
import { BannerHome } from "../components/organism/BannerHome";
import styles from "./pages.module.scss";
import Button from 'react-bootstrap/Button';
import { Highlights } from '../components/organism/Highlights';
import { Titles } from '../components/atom/Titles'

const Index = ({header}) => {

  return (
      <>
        <BannerHome />
        <Button variant="light" className={styles.ctaContact}>Contact us</Button>
        <Highlights />
        <p>In addition to observing progress, a LoadingManager can be used to override resource URLs 
          during loading. This may be helpful for assets coming from drag-and-drop events, WebSockets, WebRTC, 
          or other APIs. An example showing how to load an in-memory model using Blob URLs is below.</p>
      </>
  );
};

export default Index;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const header = await client.getSingle("header");
  
  return {
    props: {
      header
    },
  };
}
