import { useEffect, useState, useRef } from 'react';
import styles from "./Tenis.module.css"
import setas from "./images/216151_right_chevron_icon.png"

function Tenis() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3000/static/tenis.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div className={styles.container}>
      <div className={styles.carousel} ref={carousel}>
        {data.map((item) => {
          const { id, name, price, oldPrice, image } = item;
          return (
            <div className={styles.item} key={id}>
              <div className={styles.image}>
                <img src={image} alt={name} />
              </div>
              <div className={styles.info}>
                <span className={styles.name}>{name}</span>
                <span className={styles.oldPrice}>U$ {oldPrice}</span>
                <span className={styles.price}>U$ {price}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.buttons}>
        <button onClick={handleLeftClick}>
          <img
            src={setas}
            alt="Scroll Left"
          />
        </button>
        <button onClick={handleRightClick}>
          <img
            src={setas}
            alt="Scroll Right"
          />
        </button>
      </div>
    </div>
  );
}
export default Tenis