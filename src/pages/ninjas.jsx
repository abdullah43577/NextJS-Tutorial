import styles from '../styles/Ninja.module.css';

// runs at build time
export const getStaticProps = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log('res', res);
    const data = await res.json();
    console.log(data);

    return {
      props: { ninjas: data },
    };
  } catch (err) {
    console.log(err);

    return {
      props: { ninjas: [] },
    };
  }
};

const Ninjas = ({ ninjas }) => {
  const usersList = ninjas.map((ninja) => (
    <div key={ninja.id}>
      <a className={styles.single}>
        <h3>{ninja.name}</h3>
      </a>
    </div>
  ));

  return (
    <div>
      <h1>All Ninjas</h1>
      {usersList}
    </div>
  );
};

export default Ninjas;
