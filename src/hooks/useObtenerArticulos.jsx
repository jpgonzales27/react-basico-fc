import { useEffect, useState } from "react";

/**
 * Hook personalizado dentro del mismo podemos hacer uso de otros hooks
 * un hooke personalizado no returna JSX retorna un array con los
 * estado de las variables que necesitamos
 */
const useObtenerArticulos = () => {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setArticulos([
        {
          id: 1,
          titulo: "Primer articulo",
        },
        {
          id: 2,
          titulo: "Segundo articulo",
        },
        {
          id: 3,
          titulo: "Tercer articulo",
        },
      ]);
      setCargando(false);
    }, 3000);
  }, []);
  /**
   * retornanos los estados de las variables dentro de un array
   */
  return [articulos, cargando];
};

export default useObtenerArticulos;
