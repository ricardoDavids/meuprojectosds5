import { SalePage } from "types/sale";

type Props ={
    page: SalePage;
    onPageChange: Function; // onPageCahnge do tipo Function, esta função vai ser recebida como argumento;
                           // Qual é a ideia de ser utilizada como argumento, isto é a comunicação entre componentes como a questão de mudar para pagina 2 e mudar os dados da tabela que mostra na pagina 2;
}

//Dentro do componente Pagination eu posso chamar essa função -> onPageChange e ai essa função vai alterar o ActivePage dento do meu DataTable
const Pagination = ({ page, onPageChange } : Props) => {

    return (
        <div className="row d-flex justify-content-center">
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${page.first ? 'disabled' : ''} `}>
                        <button className="page-link" onClick={()=> onPageChange(page.number -1)}>Anterior</button>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">{page.number + 1}</span>
                    </li>
                    
                    <li className={`page-item ${page.last ? 'disabled' : ''} `}>
                        <button className="page-link" onClick={()=> onPageChange(page.number +1)}>Próxima</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;


// ESTE CODIGO ABAIXO QUER DIZER O SEGUINTE:
// li className={`page-item ${page.last ? 'disabled' : ''} `}> 
//Explicação: quando eu chamo a pagina 8 que é a ultima a lable do botão "Proxima" fica desabilitada.
//