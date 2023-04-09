import SearchInput from "@/components/search-input";
import Company from "@/components/company";
import Styles from './styles.module.scss';

const Dashboard = () => {
  const companies = [
    {
      name: 'Banco do Brasil',
      price: 20.00,
      logo: 'banco-do-brasil',
    },
    {
      name: 'Petrobrás',
      price: 25.00,
      logo: 'petrobras',
    },
    {
      name: 'Nubank',
      price: 5.00,
      logo: 'nubank',
    },
    {
      name: 'Itaú',
      price: 25.00,
      logo: 'itau',
    },
    {
      name: 'Magalu',
      price: 25.00,
      logo: 'magalu',
    }
  ];

  const renderCompanies = () => {
    return companies.map((company, index) => {
      return (
        <Company
          key={index}
          name={company.name}
          price={company.price}
          logo={company.logo}
        />
      );
    });
  };

  return (
    <div style={{ margin: '16px' }}>
      <SearchInput />
      <div className={Styles.companiesContainer} >
        { renderCompanies() }
      </div>
    </div>
  );
};

export default Dashboard;