import { useSelector } from 'react-redux';
import { catalogItemsSelector } from '../../../shared/store/catalog/catalogSelectors';
import { RootState } from '../../../shared/store/store';
import { formatCurrency } from '../../../shared/utils/manipulations';
import { default as S } from './Catalog.styled';
import CatalogCard from '../CatalogCard/CatalogCard';


const Catalog = () => {
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
                        <CatalogCard
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

export default Catalog;