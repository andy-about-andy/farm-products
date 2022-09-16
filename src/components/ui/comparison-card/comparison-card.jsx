import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { Feature, Header, Image, Owner, Text } from "./styles";

function ComparisonCard({ title, owner, text, image, isNegative }) {
  return (
    <Feature isNegative={isNegative}>
      <Header>
        <Image src={image} alt={title} width={52} height={52} />
        <div>
          <Owner isNegative={isNegative}>{owner}</Owner>
          <Title as="h3" size={TitleSize.EXTRA_SMALL}>
            {title}
          </Title>
        </div>
      </Header>
      <Text dangerouslySetInnerHTML={{ __html: text }} />
    </Feature>
  );
}

export default ComparisonCard;
