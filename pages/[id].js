import Head from 'next/head';
import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = await getAllIds();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
  return (
    <Layout>
    {/* render details about one entity in persons.json saved in itemData*/}
      <article className="card col-6">
        <div className="card-body">
          <h5 className="card-title">{itemData.post_author}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{itemData.post_date}</h6>
          <p className="card-text">{itemData.post_content}</p>
        </div>
      </article>
    </Layout>
  );
}
{/*render details about all other entities in persons.json related to id*/}
{/* check for existence of itemData.related property*/}