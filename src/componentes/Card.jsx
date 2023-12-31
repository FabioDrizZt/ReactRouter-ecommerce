import { useParams } from "react-router";
import { useDatosProductos } from "./Context";
// eslint-disable-next-line react/prop-types
const Card = () => {
  const { datos } = useDatosProductos();

  const params = useParams();
  let result = datos?.find((item) => item.id === params.id);
  return (
    <>
      <h2>{result?.title}</h2>
      <img src={result?.thumbnail} alt="imagen-producto" />
    </>
  );
};

export default Card;
