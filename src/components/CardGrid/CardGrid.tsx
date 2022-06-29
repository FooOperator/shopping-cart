import { useSelector } from 'react-redux';
import { catalogItemsSelector } from '../../store/catalog/catalogSelectors';
import { RootState } from '../../store/store';
import { formatCurrency } from '../../utils/manipulations';
import { default as S } from './CardGrid.styled';
import StoreCard from '../StoreCard/StoreCard';


const CardGrid = () => {
    const catalogItems = useSelector((state: RootState) => {
        const results = catalogItemsSelector(state);
        return results;
    });

    return (
        <S.Grid
        >
            {
                catalogItems.map((item, index) => {
                    const [product, count] = item;
                    const { price, title, image } = product;
                    return (
                        <StoreCard
                            key={index}
                            title={title}
                            thumbnail={image}
                            product={product}
                            stock={count}
                            legend={formatCurrency(price)}
                            height={250}
                        />
                    );
                })
            }
        </S.Grid>
    )
}

export default CardGrid;