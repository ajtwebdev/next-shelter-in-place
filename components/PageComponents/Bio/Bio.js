import React from "react";
import styled from "styled-components";
import { Container, Section } from "../../layoutComponents";
import { ButtonPrimary } from "../../buttons";
import Image from "../../Image";

const Text = styled.div`
  max-width: 90ch;
  margin-left: auto;
  margin-right: auto;
`;

const Flex = styled.div`
  display: flex;
`;

const Img = styled.div`
  figure {
    div {
      box-shadow: -20px 20px 0px 1px var(--clr-accent);
      img {
        border-radius: 10000px;
        border: 2px solid var(--clr-accent);
        height: 250px;
        width: 250px;
        object-fit: cover;
      }
    }
  }
`;

export default function Bio({ title, description, image }) {
  return (
    <Section>
      <Container>
        <center>
          <Img>
            <Image alt={image.altText || ""} srcSet={image.srcSet} />
          </Img>
          <Text className="spacing">
            <div>
              <h2 className="title">{title}</h2>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: `${description}`,
              }}
            ></div>
            <ButtonPrimary href="/contact">talk to us today</ButtonPrimary>
          </Text>
        </center>
      </Container>
    </Section>
  );
}
