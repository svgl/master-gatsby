import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import SEO from '../components/SEO';

export default function Slicemaster({ data }) {
  const { slicemaster } = data;
  return (
    <>
      <SEO
        title={`${slicemaster.name}`}
        image={slicemaster.image?.asset?.fluid?.src}
      />
      <div className="center">
        <Img fluid={slicemaster.image.asset.fluid} />
        <h2 className="mark">{data.slicemaster.name}</h2>
        <p>{slicemaster.description}</p>
      </div>
    </>
  );
}

export const query = graphql`
  query($slicemasterId: String!) {
    slicemaster: sanityPerson(id: { eq: $slicemasterId }) {
      id
      name
      description
      image {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
