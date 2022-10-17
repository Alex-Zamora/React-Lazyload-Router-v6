import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export const ProductImage = ({ image = '' }) => {
  const { product } = useContext(ProductContext);

  // let imgToShow: string;

  // if (image) {
  //   imgToShow = image;
  // } else if (product.img) {
  //   imgToShow = product.img;
  // } else {
  //   imgToShow = noImage;
  // }

  // const imgToShow = image || product.img || noImage

  const imgToShow = image ? image : product.img ?? noImage;

  return <img className={styles.productImg} src={imgToShow} alt="Product" />;
};
