import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { default as S } from './CustomLink.styled';

type LinkVariants = 'nav' | 'decorated' | 'brand';

interface LinkProps {
  to: string;
  variant?: LinkVariants;
  color?: string;
  children: React.ReactNode;
}

const LinkComponentPairs: { [key in LinkVariants]: React.ElementType } = {
  'decorated': S.DecoratedLink,
  'nav': S.NavLink,
  'brand': S.Brand
}

const CustomLink: React.FC<LinkProps> = (props) => {
  const LinkComponent = LinkComponentPairs[props.variant ?? 'decorated'];

  return (
    <>
      <LinkComponent color={props.color}>
        <Link to={props.to}>
          {props.children}
        </Link>
      </LinkComponent>
    </>
  );

}

export default CustomLink;