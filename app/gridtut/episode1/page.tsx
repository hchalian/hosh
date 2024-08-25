import styles from './ep1.module.css';

const page = () => {
  return (
    <>
      <div className="p-2 grid bg-white gap-2 max-w-[900px] mx-auto grid-cols-2">
        <div className="bg-pink-200">1</div>
        <div className="bg-pink-200">2</div>
        <div className="bg-pink-200">3</div>
        <div className="bg-pink-200">4</div>
        <div className="bg-pink-200">5</div>
        <div className="bg-pink-200">6</div>
      </div>

      <div className="block min-h-24"></div>

      <div className={styles['grid-container']}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
    </>
  );
};
export default page;
