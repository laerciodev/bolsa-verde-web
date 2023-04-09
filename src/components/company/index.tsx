import Button from '@/components/button';
import Styles from './styles.module.scss';

interface companyProps {
  name: string;
  price: number;
  logo: string;
}

const Company = (props: companyProps) => {
  return (
    <div style={{ margin: '24px 0' }}>
      <div className={Styles.companyContainer}>
        <img src={`src/assets/images/${props.logo}.png`} alt={props.name} />
        <div className={Styles.companyInfo}>
          <h4 className={Styles.companyTitle}>{ props.name }</h4>
          <p className={Styles.companyPrice}>
            Preço: { props.price }
          </p>
        </div>
      </div>
      <div style={{ margin: '16px 0' }}>
        <Button name="Comprar ação" />
      </div>
    </div>
  )
}

export default Company;