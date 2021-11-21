import axios from "axios";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
//import { isTemplateExpression } from "typescript";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";

const DataTable = () => {

    //agora vou fazer uma função para mudar a pagina 
   //Como faço isso? eu vou criar um estado 

   //activePage -> será a pagina activa
   // Função de alterar -> será o setActivePage e vai ser tambem um useState e o valor inicial do useState vai ser 0
    const [activePage,setActivePage] =useState(0);
    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    })
    //Sempre que o pagina activa mudar vai executar novamente este codigo embaixo, vai dar um axios.get e busca lá da API a minha pagina atualizada
    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=${activePage}&size=20&sort=date,desc`)
            .then(response => {
                setPage(response.data);
            });

    }, [activePage]);

    //Agora vou disponibilizar aqui uma função em baixo:
    //Entao aqui temos uma função chamada "changePage" que vai receber um index e vai atribuir esse index para o meu estado ActivePage, entao a pagina activa vai passar a ser esse index aqui 
    const changePage= (index :number) => 
    setActivePage(index);

    return (
        <>
            <Pagination page={page}onPageChange={changePage}/>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Clientes visitados</th>
                            <th>Negócios fechados</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page.content?.map(item => (
                            <tr key={item.id}>
                                <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                                <td>{item.seller.name}</td>
                                <td>{item.visited}</td>
                                <td>{item.deals}</td>
                                <td>{item.amount.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DataTable;