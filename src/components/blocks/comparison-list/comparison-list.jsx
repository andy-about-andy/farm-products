import React from "react";
import ComparisonCard from "/src/components/ui/comparison-card/comparison-card";
import { Ul, Li } from "/src/components/styled";
import { Comparisons, StyledButton, StyledTitle } from "./styles";
import { AppRoute } from "/src/const";

// список преимуществ
function ComparisonList({
  comparisons // преимущества - массив объектов с id, title, owner, isNegative, image, about
}) {
  return comparisons && comparisons.length ? (
    <Comparisons>
      <StyledTitle as="h2">Почему фермерские продукты лучше?</StyledTitle>
      <Ul $isGridList>
        {comparisons.map((comparison) => (
          <Li key={comparison.id}>
            <ComparisonCard {...comparison} />
          </Li>
        ))}
      </Ul>
      <StyledButton link={AppRoute.ORDER}>Купить</StyledButton>
    </Comparisons>
  ) : null;
}

export default ComparisonList;
