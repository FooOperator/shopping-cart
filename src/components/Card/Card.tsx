import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { default as S } from './Card.styled';


type CardVariant = 'row' | 'column'

export interface CardProps {
    title: string;
    legend?: string;
    thumbnail: string;
    height?: number;
    children: React.ReactNode;
    variant?: CardVariant;
}

const Card: React.FC<CardProps> = (props) => {
    const navigate = useNavigate();

    const handleGoTo = () => {
        navigate('/');
    }

    if (props.variant === 'row') {
        return (
            <S.Card variant={'row'}>
                <S.ThumbnailHolder
                    height={props.height ?? 300}
                >
                    <S.Thumbnail
                        src={props.thumbnail}
                        onClick={handleGoTo}
                    />
                </S.ThumbnailHolder>
                <S.InfoColumn>
                    <S.Title onClick={handleGoTo}>{props.title}</S.Title>
                    {
                        props.legend &&
                        <S.Legend>{props.legend}</S.Legend>
                    }
                    {
                        props.children &&
                        <S.Children>
                            {props.children}
                        </S.Children>
                    }
                </S.InfoColumn>
            </S.Card>
        );
    }

    return (
        <S.Card variant={'column'}>
            <S.ThumbnailHolder
                height={props.height ?? 300}
            >
                <S.Thumbnail
                    src={props.thumbnail}
                    onClick={handleGoTo}
                />
            </S.ThumbnailHolder>
            <S.Title onClick={handleGoTo}>{props.title}</S.Title>
            {
                props.legend &&
                <S.Legend>{props.legend}</S.Legend>
            }
            {
                props.children &&
                <S.Children>
                    {props.children}
                </S.Children>
            }
        </S.Card>
    )
}

export default Card;