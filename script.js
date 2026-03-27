// ============================================
// DADOS DOS MUNICÍPIOS
// ============================================
const dadosMunicipios = {
    choró: {
        nome: "Choró",
        regiao: "Sertão Central",
        cor: "#002B5C",
        contrato: "2025.07.15.001",
        dataInicio: "15/07/2025",
        dataFim: "14/07/2026",
        valorTotal: 3500000.00,
        prefeito: "Dr. João Batista",
        secretario: "Dra. Maria José",
        documentos: 48,
        pagamentos: 322707.06,
        fornecedores: 15,
        conclusao: 84
    },
    ibiapina: {
        nome: "Ibiapina",
        regiao: "Serra da Ibiapaba",
        cor: "#2E7D32",
        contrato: "2025.07.20.002",
        dataInicio: "20/07/2025",
        dataFim: "19/07/2026",
        valorTotal: 3200000.00,
        prefeito: "Dr. Marcos Sousa",
        secretario: "Dra. Ana Paula",
        documentos: 42,
        pagamentos: 285430.50,
        fornecedores: 12,
        conclusao: 92
    },
    "martinópole": {
        nome: "Martinópole",
        regiao: "Vale do Acaraú",
        cor: "#B71C1C",
        contrato: "2025.07.18.003",
        dataInicio: "18/07/2025",
        dataFim: "17/07/2026",
        valorTotal: 2800000.00,
        prefeito: "Dr. Francisco Chagas",
        secretario: "Dra. Luzia Helena",
        documentos: 38,
        pagamentos: 198450.30,
        fornecedores: 10,
        conclusao: 86
    },
    potengi: {
        nome: "Potengi",
        regiao: "Chapada do Araripe",
        cor: "#4A148C",
        contrato: "2025.07.22.004",
        dataInicio: "22/07/2025",
        dataFim: "21/07/2026",
        valorTotal: 2950000.00,
        prefeito: "Dr. Raimundo Nonato",
        secretario: "Dra. Socorro Lima",
        documentos: 35,
        pagamentos: 167890.45,
        fornecedores: 9,
        conclusao: 94
    },
    umirim: {
        nome: "Umirim",
        regiao: "Litoral Oeste",
        cor: "#E65100",
        contrato: "2025.07.25.005",
        dataInicio: "25/07/2025",
        dataFim: "24/07/2026",
        valorTotal: 3100000.00,
        prefeito: "Dr. José Airton",
        secretario: "Dra. Fátima Gomes",
        documentos: 41,
        pagamentos: 276543.80,
        fornecedores: 11,
        conclusao: 81
    }
};

// ============================================
// DADOS DO CHECKLIST
// ============================================
let empresas = [
    'FAU SOLUÇÕES',
    'LUNA EMP',
    'INSTITUTO FORZA',
    'CONTAGER',
    'J.P SERVIÇOS'
];

let documentosCheck = [
    { nome: 'nota_fiscal_001.pdf', dataNF: '2025-08-15', status: 'Válido' },
    { nome: 'contrato_assinado.pdf', dataNF: '2025-08-10', status: 'Válido' },
    { nome: 'nf_servicos_123.pdf', dataNF: '2025-08-20', status: 'Válido' },
    { nome: 'relatorio_mensal.pdf', dataNF: '2025-08-25', status: 'Inválido' }
];

let assinaturaUpload = null;

// ============================================
// DADOS DE RH
// ============================================
let funcionariosRH = [
    { nome: 'João Silva', cargo: 'Médico', admissao: '02/01/2020', salario: 13500.00, status: 'Ativo' },
    { nome: 'Maria Oliveira', cargo: 'Enfermeira', admissao: '15/03/2021', salario: 5300.00, status: 'Ativo' },
    { nome: 'Carlos Santos', cargo: 'Técnico Enfermagem', admissao: '10/06/2022', salario: 2800.00, status: 'Ativo' },
    { nome: 'Ana Rodrigues', cargo: 'Fisioterapeuta', admissao: '05/02/2023', salario: 4200.00, status: 'Ativo' },
    { nome: 'Pedro Lima', cargo: 'Assistente Social', admissao: '20/08/2023', salario: 3800.00, status: 'Inativo' }
];

// ============================================
// DADOS DE FORNECEDORES
// ============================================
let fornecedoresDB = [
    { 
        nome: 'FAU SOLUÇÕES', 
        cnpj: '12.345.678/0001-90', 
        contato: '(85) 3456-7890', 
        email: 'contato@fau.com.br',
        cnd: { 
            status: 'válida', 
            emissao: '01/08/2025', 
            validade: '31/10/2025',
            diasRestantes: 30
        },
        nf: { 
            emitida: true, 
            numero: 'NF-2025-1234', 
            data: '15/08/2025', 
            valor: 263886.81 
        },
        contrato: {
            numero: 'CT-001/2025',
            inicio: '01/01/2025',
            fim: '31/12/2025',
            arquivo: 'contrato_fau.pdf'
        },
        relatorio: {
            entregue: true,
            periodo: 'Agosto/2025',
            arquivo: 'relatorio_fau_ago2025.pdf'
        }
    },
    { 
        nome: 'LUNA EMP', 
        cnpj: '23.456.789/0001-01', 
        contato: '(85) 4567-8901', 
        email: 'luna@emp.com.br',
        cnd: { 
            status: 'vencida', 
            emissao: '01/05/2025', 
            validade: '31/07/2025',
            diasRestantes: -15
        },
        nf: { 
            emitida: false, 
            numero: '', 
            data: '', 
            valor: 0 
        },
        contrato: {
            numero: 'CT-002/2025',
            inicio: '01/02/2025',
            fim: '31/01/2026',
            arquivo: 'contrato_luna.pdf'
        },
        relatorio: {
            entregue: false,
            periodo: '',
            arquivo: ''
        }
    },
    { 
        nome: 'INSTITUTO FORZA', 
        cnpj: '41.697.143/0001-81', 
        contato: '(85) 5678-9012', 
        email: 'contato@forza.org.br',
        cnd: { 
            status: 'válida', 
            emissao: '01/08/2025', 
            validade: '30/09/2025',
            diasRestantes: 15
        },
        nf: { 
            emitida: true, 
            numero: 'NF-2025-5678', 
            data: '20/08/2025', 
            valor: 25000.00 
        },
        contrato: {
            numero: 'CT-003/2025',
            inicio: '15/07/2025',
            fim: '14/07/2026',
            arquivo: 'contrato_forza.pdf'
        },
        relatorio: {
            entregue: true,
            periodo: 'Agosto/2025',
            arquivo: 'relatorio_forza_ago2025.pdf'
        }
    }
];

// ============================================
// VARIÁVEIS GLOBAIS
// ============================================
let currentPage = 'dashboard';
let currentMunicipio = 'choró';

// ============================================
// INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    carregarPagina('dashboard');
    setupAssinatura();
});

function setupEventListeners() {
    document.getElementById('municipioSelect').addEventListener('change', function() {
        currentMunicipio = this.value;
        document.getElementById('currentMunicipio').textContent = dadosMunicipios[currentMunicipio].nome;
        carregarPagina(currentPage);
    });
    
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            this.classList.add('active');
            
            const page = this.dataset.page;
            document.getElementById('page-title').textContent = this.querySelector('span').textContent;
            currentPage = page;
            
            carregarPagina(page);
        });
    });
    
    document.getElementById('competencia').addEventListener('change', function() {
        carregarPagina(currentPage);
    });

    // Upload de assinatura
    document.addEventListener('change', function(e) {
        if (e.target.id === 'uploadAssinatura') {
            let file = e.target.files[0];
            if (!file) return;
            
            let reader = new FileReader();
            reader.onload = function(event) {
                assinaturaUpload = event.target.result;
                
                // Mostrar preview da assinatura carregada
                let canvas = document.getElementById('assinaturaCanvas');
                let ctx = canvas.getContext('2d');
                let img = new Image();
                img.onload = function() {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                };
                img.src = event.target.result;
                
                alert('Assinatura carregada com sucesso!');
            };
            reader.readAsDataURL(file);
        }
    });
}

function carregarPagina(page) {
    switch(page) {
        case 'dashboard':
            carregarDashboard();
            break;
        case 'municipio':
            carregarMunicipio();
            break;
        case 'pagamentos':
            carregarPagamentos();
            break;
        case 'fornecedores':
            carregarFornecedores();
            break;
        case 'rh':
            carregarRH();
            break;
        case 'assistencial':
            carregarAssistencial();
            break;
        case 'livro':
            carregarLivro();
            break;
        case 'check-dashboard':
            carregarCheckDashboard();
            break;
        case 'empresas':
            carregarEmpresas();
            break;
        case 'upload':
            carregarUpload();
            break;
        case 'analise':
            carregarAnalise();
            break;
        case 'relatorio':
            carregarRelatorio();
            break;
        case 'admin-dashboard':
            carregarDashboardAdmin();
            break;
        case 'admin-usuarios':
            carregarUsuarios();
            break;
        case 'admin-municipios':
            carregarTodosMunicipios();
            break;
        default:
            carregarDashboard();
    }
}

// ============================================
// DASHBOARD PRINCIPAL
// ============================================
function carregarDashboard() {
    const dados = dadosMunicipios[currentMunicipio];

    const diasRestantes = calcularDiasRestantes(dados.dataFim);
    const percentualContrato = Math.round(((365 - diasRestantes) / 365) * 100);
    
    let corVigencia = '#28a745';
    if (diasRestantes < 60) corVigencia = '#dc3545';
    else if (diasRestantes < 120) corVigencia = '#ffc107';

    const html = `
        <div class="cards-row">
            <div class="card">
                <div class="card-icon docs"><i class="fas fa-file-alt"></i></div>
                <div class="card-content">
                    <h3>Total Documentos</h3>
                    <div class="valor">${dados.documentos}</div>
                    <div class="small">3 vencidos</div>
                </div>
            </div>
            
            <div class="card">
                <div class="card-icon payments"><i class="fas fa-dollar-sign"></i></div>
                <div class="card-content">
                    <h3>Pagamentos</h3>
                    <div class="valor">R$ ${formatarMoeda(dados.pagamentos)}</div>
                    <div class="small">Agosto/2025</div>
                </div>
            </div>
            
            <div class="card">
                <div class="card-icon suppliers"><i class="fas fa-truck"></i></div>
                <div class="card-content">
                    <h3>Fornecedores</h3>
                    <div class="valor">${dados.fornecedores}</div>
                    <div class="small">Ativos</div>
                </div>
            </div>
            
            <div class="card">
                <div class="card-icon completion"><i class="fas fa-check-circle"></i></div>
                <div class="card-content">
                    <h3>Conclusão</h3>
                    <div class="valor">${dados.conclusao}%</div>
                    <div class="small">Documentação OK</div>
                </div>
            </div>
        </div>

        <div class="dashboard-grid">
            <div class="vigencia-card">
                <div class="vigencia-header">
                    <i class="fas fa-file-contract"></i>
                    <h3>VIGÊNCIA DO CONTRATO</h3>
                </div>
                
                <div class="contrato-info">
                    <div class="info-row">
                        <span class="info-label">Número:</span>
                        <span class="info-value">${dados.contrato}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Período:</span>
                        <span class="info-value">${dados.dataInicio} a ${dados.dataFim}</span>
                    </div>
                </div>
                
                <div class="vigencia-timer">
                    <div class="timer-circle" style="border-color: ${corVigencia}">
                        <span class="timer-dias">${diasRestantes}</span>
                        <span class="timer-label">dias</span>
                    </div>
                    <div class="timer-info">
                        <div class="timer-texto" style="color: ${corVigencia}">
                            ${diasRestantes > 0 ? 'Vigente' : 'Vencido'}
                        </div>
                        <div class="timer-percentual">${percentualContrato}% concluído</div>
                    </div>
                </div>
                
                <div class="progresso-container">
                    <div class="progresso-label">
                        <span>Progresso do Contrato</span>
                        <span>${percentualContrato}%</span>
                    </div>
                    <div class="progresso-bar">
                        <div class="progresso-fill" style="width: ${percentualContrato}%"></div>
                    </div>
                </div>
            </div>

            <div class="historico-card">
                <div class="historico-header">
                    <i class="fas fa-history"></i>
                    <h3>HISTÓRICO 2025</h3>
                </div>
                
                <div class="historico-grid">
                    ${gerarHistoricoExemplo()}
                </div>
                
                <div class="historico-legenda">
                    <div class="legenda-item">
                        <span class="legenda-cor completo"></span>
                        <span>Completo</span>
                    </div>
                    <div class="legenda-item">
                        <span class="legenda-cor pendente"></span>
                        <span>Pendente</span>
                    </div>
                    <div class="legenda-item">
                        <span class="legenda-cor futuro"></span>
                        <span>Futuro</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="stats-row">
            <div class="stat-card">
                <div class="stat-icon" style="background: #002B5C"><i class="fas fa-file-pdf"></i></div>
                <div class="stat-content">
                    <div class="stat-valor">157</div>
                    <div class="stat-label">Documentos no ano</div>
                </div>
            </div>
            
            <div class="stat-card">
                <div class="stat-icon" style="background: #28a745"><i class="fas fa-check-circle"></i></div>
                <div class="stat-content">
                    <div class="stat-valor">6</div>
                    <div class="stat-label">Meses completos</div>
                </div>
            </div>
            
            <div class="stat-card">
                <div class="stat-icon" style="background: #ffc107"><i class="fas fa-exclamation-triangle"></i></div>
                <div class="stat-content">
                    <div class="stat-valor">2</div>
                    <div class="stat-label">Meses pendentes</div>
                </div>
            </div>
            
            <div class="stat-card">
                <div class="stat-icon" style="background: #17a2b8"><i class="fas fa-percent"></i></div>
                <div class="stat-content">
                    <div class="stat-valor">75%</div>
                    <div class="stat-label">Conclusão anual</div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('content-area').innerHTML = html;
}

// ============================================
// PÁGINA MUNICÍPIO
// ============================================
function carregarMunicipio() {
    const dados = dadosMunicipios[currentMunicipio];
    
    const html = `
        <div class="lista-container">
            <div class="lista-header">
                <h2><i class="fas fa-city"></i> Documentos do Município - ${dados.nome}</h2>
                <button class="btn-add" onclick="alert('Adicionar documento')">
                    <i class="fas fa-plus"></i> Adicionar Documento
                </button>
            </div>
            
            <div class="item-lista">
                <div class="item-info">
                    <h4>Contrato de Gestão</h4>
                    <p>Nº ${dados.contrato} · Vigência: ${dados.dataInicio} a ${dados.dataFim}</p>
                </div>
                <div class="item-valor">R$ ${formatarMoeda(dados.valorTotal)}</div>
                <div class="item-acoes">
                    <button class="view" onclick="alert('Visualizar')"><i class="fas fa-eye"></i></button>
                    <button class="edit" onclick="alert('Editar')"><i class="fas fa-edit"></i></button>
                </div>
            </div>
            
            <div class="item-lista">
                <div class="item-info">
                    <h4>Termo Aditivo 001/2025</h4>
                    <p>Prorrogação de prazo · 15/08/2025</p>
                </div>
                <div class="item-acoes">
                    <button class="view" onclick="alert('Visualizar')"><i class="fas fa-eye"></i></button>
                    <button class="edit" onclick="alert('Editar')"><i class="fas fa-edit"></i></button>
                </div>
            </div>
            
            <div class="item-lista">
                <div class="item-info">
                    <h4>Publicação DOU</h4>
                    <p>Extrato do contrato · 16/07/2025</p>
                </div>
                <div class="item-acoes">
                    <button class="view" onclick="alert('Visualizar')"><i class="fas fa-eye"></i></button>
                    <button class="edit" onclick="alert('Editar')"><i class="fas fa-edit"></i></button>
                </div>
            </div>
            
            <div class="item-lista">
                <div class="item-info">
                    <h4>Plano de Trabalho</h4>
                    <p>PT-001/2025 · Aprovado</p>
                </div>
                <div class="item-acoes">
                    <button class="view" onclick="alert('Visualizar')"><i class="fas fa-eye"></i></button>
                    <button class="edit" onclick="alert('Editar')"><i class="fas fa-edit"></i></button>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('content-area').innerHTML = html;
}

// ============================================
// PÁGINA PAGAMENTOS
// ============================================
function carregarPagamentos() {
    const pagamentos = [
        { fornecedor: 'FAU SOLUÇÕES', descricao: 'Serviços Médicos', valor: 263886.81, status: 'Pago', data: '30/08/2025' },
        { fornecedor: 'LUNA EMP', descricao: 'Gêneros Alimentícios', valor: 19320.13, status: 'Pendente', data: '30/08/2025' },
        { fornecedor: 'INSTITUTO FORZA', descricao: 'Taxa Administrativa', valor: 25000.00, status: 'Pago', data: '30/08/2025' },
        { fornecedor: 'CONTAGER', descricao: 'Locação de Imagem', valor: 4000.00, status: 'Pago', data: '30/08/2025' }
    ];
    
    let totalPagamentos = pagamentos.reduce((acc, p) => acc + p.valor, 0);
    
    let html = `
        <div class="lista-container">
            <div class="lista-header">
                <h2><i class="fas fa-money-bill-wave"></i> Pagamentos</h2>
                <button class="btn-add" onclick="alert('Adicionar pagamento')">
                    <i class="fas fa-plus"></i> Adicionar Pagamento
                </button>
            </div>
            
            <div class="cards-row" style="margin-bottom: 20px;">
                <div class="stat-card">
                    <div class="stat-icon" style="background: #002B5C;"><i class="fas fa-money-bill"></i></div>
                    <div class="stat-content">
                        <div class="stat-valor">${pagamentos.length}</div>
                        <div class="stat-label">Total Pagamentos</div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon" style="background: #28a745;"><i class="fas fa-check-circle"></i></div>
                    <div class="stat-content">
                        <div class="stat-valor">${pagamentos.filter(p => p.status === 'Pago').length}</div>
                        <div class="stat-label">Pagos</div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon" style="background: #ffc107;"><i class="fas fa-clock"></i></div>
                    <div class="stat-content">
                        <div class="stat-valor">${pagamentos.filter(p => p.status === 'Pendente').length}</div>
                        <div class="stat-label">Pendentes</div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon" style="background: #17a2b8;"><i class="fas fa-calculator"></i></div>
                    <div class="stat-content">
                        <div class="stat-valor">R$ ${formatarMoeda(totalPagamentos)}</div>
                        <div class="stat-label">Total</div>
                    </div>
                </div>
            </div>
    `;
    
    pagamentos.forEach(p => {
        html += `
            <div class="item-lista">
                <div class="item-info">
                    <h4>${p.fornecedor}</h4>
                    <p>${p.descricao} · ${p.data}</p>
                </div>
                <div class="item-valor">R$ ${formatarMoeda(p.valor)}</div>
                <div style="margin-right: 15px;">
                    <span style="background: ${p.status === 'Pago' ? '#d4edda' : '#fff3cd'}; color: ${p.status === 'Pago' ? '#155724' : '#856404'}; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem;">
                        ${p.status}
                    </span>
                </div>
                <div class="item-acoes">
                    <button class="view" onclick="alert('Visualizar')"><i class="fas fa-eye"></i></button>
                    <button class="edit" onclick="alert('Editar')"><i class="fas fa-edit"></i></button>
                </div>
            </div>
        `;
    });
    
    html += `<div class="total-pagar"><i class="fas fa-calculator"></i> TOTAL GERAL: R$ ${formatarMoeda(totalPagamentos)}</div>`;
    html += `</div>`;
    document.getElementById('content-area').innerHTML = html;
}

// ============================================
// PÁGINA ASSISTENCIAL
// ============================================
function carregarAssistencial() {
    const dados = dadosMunicipios[currentMunicipio];
    
    const producao = [
        { indicador: 'Atendimentos', semana1: 420, semana2: 385, semana3: 410, semana4: 632, total: 1847 },
        { indicador: 'Internações', semana1: 28, semana2: 32, semana3: 30, semana4: 34, total: 124 },
        { indicador: 'Cirurgias', semana1: 8, semana2: 7, semana3: 9, semana4: 8, total: 32 },
        { indicador: 'Exames', semana1: 589, semana2: 612, semana3: 634, semana4: 621, total: 2456 }
    ];
    
    let html = `
        <div class="cards-row" style="margin-bottom: 20px;">
            <div class="card">
                <div class="card-icon" style="background: #002B5C"><i class="fas fa-user-md"></i></div>
                <div class="card-content">
                    <h3>Atendimentos</h3>
                    <div class="valor">1.847</div>
                </div>
            </div>
            <div class="card">
                <div class="card-icon" style="background: #28a745"><i class="fas fa-procedures"></i></div>
                <div class="card-content">
                    <h3>Internações</h3>
                    <div class="valor">124</div>
                </div>
            </div>
            <div class="card">
                <div class="card-icon" style="background: #ffc107"><i class="fas fa-syringe"></i></div>
                <div class="card-content">
                    <h3>Cirurgias</h3>
                    <div class="valor">32</div>
                </div>
            </div>
            <div class="card">
                <div class="card-icon" style="background: #17a2b8"><i class="fas fa-flask"></i></div>
                <div class="card-content">
                    <h3>Exames</h3>
                    <div class="valor">2.456</div>
                </div>
            </div>
        </div>

        <div class="lista-container">
            <div class="lista-header">
                <h2><i class="fas fa-chart-bar"></i> Produção Assistencial - ${dados.nome}</h2>
                <button class="btn-add" onclick="alert('Adicionar produção')">
                    <i class="fas fa-plus"></i> Adicionar Produção
                </button>
            </div>
            
            <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="background: #002B5C; color: white;">
                            <th style="padding: 12px; text-align: left;">Indicador</th>
                            <th style="padding: 12px; text-align: center;">Semana 1</th>
                            <th style="padding: 12px; text-align: center;">Semana 2</th>
                            <th style="padding: 12px; text-align: center;">Semana 3</th>
                            <th style="padding: 12px; text-align: center;">Semana 4</th>
                            <th style="padding: 12px; text-align: center;">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${producao.map(p => `
                            <tr style="border-bottom: 1px solid #e9ecef;">
                                <td style="padding: 12px; font-weight: 500;">${p.indicador}</td>
                                <td style="padding: 12px; text-align: center;">${p.semana1}</td>
                                <td style="padding: 12px; text-align: center;">${p.semana2}</td>
                                <td style="padding: 12px; text-align: center;">${p.semana3}</td>
                                <td style="padding: 12px; text-align: center;">${p.semana4}</td>
                                <td style="padding: 12px; text-align: center; font-weight: 600;">${p.total}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    document.getElementById('content-area').innerHTML = html;
}

// ============================================
// PÁGINA RH COM IMPORTAÇÃO EXCEL
// ============================================
function carregarRH() {
    let totalSalarios = funcionariosRH.reduce((acc, f) => acc + f.salario, 0);
    let totalFuncionarios = funcionariosRH.length;
    let funcionariosAtivos = funcionariosRH.filter(f => f.status === 'Ativo').length;
    
    let tabelaHTML = '';
    funcionariosRH.forEach((f, index) => {
        tabelaHTML += `
            <tr>
                <td>${f.nome}</td>
                <td>${f.cargo}</td>
                <td>${f.admissao}</td>
                <td>R$ ${formatarMoeda(f.salario)}</td>
                <td>
                    <span style="background: ${f.status === 'Ativo' ? '#d4edda' : '#f8d7da'}; color: ${f.status === 'Ativo' ? '#155724' : '#721c24'}; padding: 4px 10px; border-radius: 20px;">
                        ${f.status}
                    </span>
                </td>
                <td>
                    <button class="edit" onclick="editarFuncionario(${index})"><i class="fas fa-edit"></i></button>
                    <button class="delete" onclick="excluirFuncionario(${index})"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        `;
    });

    const html = `
        <div class="lista-container">
            <div class="lista-header">
                <h2><i class="fas fa-users"></i> Recursos Humanos</h2>
                <div style="display: flex; gap: 10px;">
                    <button class="btn-add" onclick="importarRHExcel()">
                        <i class="fas fa-file-excel"></i> Importar Excel
                    </button>
                    <button class="btn-add" onclick="adicionarFuncionario()">
                        <i class="fas fa-plus"></i> Adicionar
                    </button>
                </div>
            </div>
            
            <div class="cards-row" style="margin-bottom: 20px;">
                <div class="stat-card">
                    <div class="stat-icon" style="background: #002B5C;"><i class="fas fa-users"></i></div>
                    <div class="stat-content">
                        <div class="stat-valor">${totalFuncionarios}</div>
                        <div class="stat-label">Total Funcionários</div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon" style="background: #28a745;"><i class="fas fa-user-check"></i></div>
                    <div class="stat-content">
                        <div class="stat-valor">${funcionariosAtivos}</div>
                        <div class="stat-label">Ativos</div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon" style="background: #ffc107;"><i class="fas fa-clock"></i></div>
                    <div class="stat-content">
                        <div class="stat-valor">${totalFuncionarios - funcionariosAtivos}</div>
                        <div class="stat-label">Inativos</div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon" style="background: #17a2b8;"><i class="fas fa-calculator"></i></div>
                    <div class="stat-content">
                        <div class="stat-valor">R$ ${formatarMoeda(totalSalarios)}</div>
                        <div class="stat-label">Total Folha</div>
                    </div>
                </div>
            </div>
            
            <div class="import-area" onclick="document.getElementById('excelRHInput').click()">
                <i class="fas fa-file-excel"></i>
                <h3>Clique para importar planilha Excel</h3>
                <p>Formato: Nome, Cargo, Admissão, Salário, Status</p>
                <input type="file" id="excelRHInput" accept=".xlsx, .xls, .csv" style="display: none;" onchange="processarExcelRH(this)">
            </div>
            
            <div style="overflow-x: auto;">
                <table class="rh-table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Cargo</th>
                            <th>Admissão</th>
                            <th>Salário</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tabelaHTML || '<tr><td colspan="6" style="text-align: center;">Nenhum funcionário cadastrado</td></tr>'}
                    </tbody>
                </table>
            </div>
            
            <div class="total-pagar">
                <i class="fas fa-calculator"></i> TOTAL A PAGAR: R$ ${formatarMoeda(totalSalarios)}
            </div>
        </div>
    `;
    
    document.getElementById('content-area').innerHTML = html;
}

function importarRHExcel() {
    const input = document.getElementById('excelRHInput');
    if (input) {
        input.click();
    }
}

function processarExcelRH(input) {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

        for (let i = 1; i < jsonData.length; i++) {
            const row = jsonData[i];
            if (row.length >= 4) {
                funcionariosRH.push({
                    nome: row[0] || '',
                    cargo: row[1] || '',
                    admissao: row[2] || '',
                    salario: parseFloat(row[3]) || 0,
                    status: row[4] || 'Ativo'
                });
            }
        }
        
        alert(`${jsonData.length - 1} funcionários importados com sucesso!`);
        carregarPagina('rh');
    };
    reader.readAsArrayBuffer(file);
}

function adicionarFuncionario() {
    const nome = prompt('Nome do funcionário:');
    if (!nome) return;
    const cargo = prompt('Cargo:');
    const salario = parseFloat(prompt('Salário:'));
    const admissao = prompt('Data de admissão (DD/MM/AAAA):');
    
    funcionariosRH.push({
        nome: nome,
        cargo: cargo,
        admissao: admissao,
        salario: salario,
        status: 'Ativo'
    });
    
    carregarPagina('rh');
}

function editarFuncionario(index) {
    const funcionario = funcionariosRH[index];
    const novoNome = prompt('Nome:', funcionario.nome);
    if (novoNome) funcionario.nome = novoNome;
    const novoCargo = prompt('Cargo:', funcionario.cargo);
    if (novoCargo) funcionario.cargo = novoCargo;
    const novoSalario = parseFloat(prompt('Salário:', funcionario.salario));
    if (novoSalario) funcionario.salario = novoSalario;
    const novoStatus = prompt('Status (Ativo/Inativo):', funcionario.status);
    if (novoStatus) funcionario.status = novoStatus;
    
    carregarPagina('rh');
}

function excluirFuncionario(index) {
    if (confirm('Deseja realmente excluir este funcionário?')) {
        funcionariosRH.splice(index, 1);
        carregarPagina('rh');
    }
}

// ============================================
// PÁGINA FORNECEDORES COM VALIDAÇÕES
// ============================================
function carregarFornecedores() {
    let totalFornecedores = fornecedoresDB.length;
    let cndValidas = fornecedoresDB.filter(f => f.cnd.status === 'válida').length;
    let nfEmitidas = fornecedoresDB.filter(f => f.nf.emitida).length;
    let relatoriosEntregues = fornecedoresDB.filter(f => f.relatorio.entregue).length;
    
    let tabelaHTML = '';
    fornecedoresDB.forEach((f, index) => {
        let cndClass = '';
        let cndText = '';
        
        if (f.cnd.status === 'válida') {
            if (f.cnd.diasRestantes <= 15) {
                cndClass = 'cnd-atencao';
                cndText = `⚠️ Vence em ${f.cnd.diasRestantes} dias`;
            } else {
                cndClass = 'cnd-valida';
                cndText = `✅ Válida até ${f.cnd.validade}`;
            }
        } else {
            cndClass = 'cnd-vencida';
            cndText = `❌ Vencida há ${Math.abs(f.cnd.diasRestantes)} dias`;
        }
        
        tabelaHTML += `
            <tr>
                <td><strong>${f.nome}</strong><br><small>${f.cnpj}</small></td>
                <td>${f.contato}<br><small>${f.email}</small></td>
                <td>
                    <span class="${cndClass}">
                        ${cndText}
                    </span>
                </td>
                <td>
                    ${f.nf.emitida ? 
                        `✅ NF ${f.nf.numero}<br><small>R$ ${formatarMoeda(f.nf.valor)} - ${f.nf.data}</small>` : 
                        '❌ Não emitida'}
                </td>
                <td>
                    <strong>${f.contrato.numero}</strong><br>
                    <small>${f.contrato.inicio} a ${f.contrato.fim}</small>
                </td>
                <td>
                    ${f.relatorio.entregue ? 
                        `✅ ${f.relatorio.periodo}<br><small>${f.relatorio.arquivo}</small>` : 
                        '❌ Pendente'}
                </td>
                <td>
                    <button class="edit" onclick="editarFornecedor(${index})"><i class="fas fa-edit"></i></button>
                    <button class="view" onclick="verFornecedor(${index})"><i class="fas fa-eye"></i></button>
                </td>
            </tr>
        `;
    });

    const html = `
        <div class="lista-container">
            <div class="lista-header">
                <h2><i class="fas fa-truck"></i> Fornecedores</h2>
                <button class="btn-add" onclick="adicionarFornecedor()">
                    <i class="fas fa-plus"></i> Adicionar Fornecedor
                </button>
            </div>
            
            <div class="cards-row" style="margin-bottom: 20px;">
                <div class="stat-card">
                    <div class="stat-icon" style="background: #002B5C;"><i class="fas fa-building"></i></div>
                    <div class="stat-content">
                        <div class="stat-valor">${totalFornecedores}</div>
                        <div class="stat-label">Total</div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon" style="background: #28a745;"><i class="fas fa-certificate"></i></div>
                    <div class="stat-content">
                        <div class="stat-valor">${cndValidas}</div>
                        <div class="stat-label">CND Válidas</div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon" style="background: #17a2b8;"><i class="fas fa-file-invoice"></i></div>
                    <div class="stat-content">
                        <div class="stat-valor">${nfEmitidas}</div>
                        <div class="stat-label">NF Emitidas</div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon" style="background: #ffc107;"><i class="fas fa-file-alt"></i></div>
                    <div class="stat-content">
                        <div class="stat-valor">${relatoriosEntregues}</div>
                        <div class="stat-label">Relatórios</div>
                    </div>
                </div>
            </div>
            
            <div style="overflow-x: auto;">
                <table class="rh-table">
                    <thead>
                        <tr>
                            <th>Fornecedor</th>
                            <th>Contato</th>
                            <th>CND</th>
                            <th>NF Emitida</th>
                            <th>Contrato</th>
                            <th>Relatório</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tabelaHTML || '<tr><td colspan="7" style="text-align: center;">Nenhum fornecedor cadastrado</td></tr>'}
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    document.getElementById('content-area').innerHTML = html;
}

function adicionarFornecedor() {
    const nome = prompt('Nome do fornecedor:');
    if (!nome) return;
    
    fornecedoresDB.push({
        nome: nome,
        cnpj: prompt('CNPJ:'),
        contato: prompt('Telefone:'),
        email: prompt('Email:'),
        cnd: { 
            status: 'válida', 
            emissao: new Date().toLocaleDateString('pt-BR'), 
            validade: prompt('Data de validade da CND (DD/MM/AAAA):'),
            diasRestantes: 30
        },
        nf: { 
            emitida: false, 
            numero: '', 
            data: '', 
            valor: 0 
        },
        contrato: {
            numero: prompt('Número do contrato:'),
            inicio: prompt('Data início (DD/MM/AAAA):'),
            fim: prompt('Data fim (DD/MM/AAAA):'),
            arquivo: ''
        },
        relatorio: {
            entregue: false,
            periodo: '',
            arquivo: ''
        }
    });
    
    carregarPagina('fornecedores');
}

function editarFornecedor(index) {
    alert('Funcionalidade em desenvolvimento');
}

function verFornecedor(index) {
    const f = fornecedoresDB[index];
    alert(`
        FORNECEDOR: ${f.nome}
        CNPJ: ${f.cnpj}
        Contato: ${f.contato}
        Email: ${f.email}
        
        CND: ${f.cnd.status} - Válida até ${f.cnd.validade}
        NF: ${f.nf.emitida ? f.nf.numero : 'Não emitida'}
        Contrato: ${f.contrato.numero} (${f.contrato.inicio} a ${f.contrato.fim})
        Relatório: ${f.relatorio.entregue ? 'Entregue' : 'Pendente'}
    `);
}

// ============================================
// GERADOR DE LIVRO
// ============================================
function gerarPDFLivroCompleto() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');
    
    const dados = usuarioLogado.role === 'admin' ? dadosMunicipios.choró : dadosMunicipios[usuarioLogado.municipio];
    const competencia = document.getElementById('competencia').selectedOptions[0].text;
    
    // Totais
    let totalSalarios = funcionariosRH.reduce((acc, f) => acc + f.salario, 0);
    let totalPagamentos = fornecedoresDB.reduce((acc, f) => acc + (f.nf.emitida ? f.nf.valor : 0), 0);
    let totalGeral = totalSalarios + totalPagamentos;
    
    let y = 20;
    let pageNum = 1;

    // ===== CAPA =====
    doc.setFillColor(0, 43, 92);
    doc.circle(105, 40, 15, 'F');
    doc.setFillColor(255, 215, 0);
    doc.circle(105, 40, 12, 'F');
    
    doc.setFontSize(20);
    doc.setTextColor(0, 43, 92);
    doc.text(`MUNICÍPIO DE ${dados.nome.toUpperCase()}`, 105, 70, { align: 'center' });
    
    doc.setFontSize(16);
    doc.setTextColor(100, 100, 100);
    doc.text('SECRETARIA MUNICIPAL DE SAÚDE', 105, 80, { align: 'center' });
    
    doc.setFontSize(24);
    doc.setTextColor(0, 0, 0);
    doc.text('LIVRO DE', 105, 100, { align: 'center' });
    doc.text('PRESTAÇÃO DE CONTAS', 105, 115, { align: 'center' });
    
    doc.setFontSize(18);
    doc.setTextColor(dados.cor);
    doc.text(competencia, 105, 135, { align: 'center' });
    
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Documento gerado em: ${new Date().toLocaleDateString('pt-BR')}`, 105, 250, { align: 'center' });
    
    doc.setFontSize(8);
    doc.text('Página 1', 195, 285, { align: 'right' });

    // ===== PÁGINA 2 - SUMÁRIO =====
    doc.addPage();
    y = 30;
    pageNum++;
    
    doc.setFontSize(16);
    doc.setTextColor(0, 43, 92);
    doc.text('SUMÁRIO', 105, y, { align: 'center' });
    y += 15;
    
    doc.setLineWidth(0.5);
    doc.line(20, y, 190, y);
    y += 15;
    
    const itensSumario = [
        '1. DADOS DO CONTRATO',
        '2. INFORMAÇÕES DO MUNICÍPIO',
        '3. RESUMO FINANCEIRO',
        '4. DEMONSTRATIVO DE PAGAMENTOS',
        '5. RELAÇÃO DE FORNECEDORES',
        '6. FOLHA DE PAGAMENTO (RH)',
        '7. PRODUÇÃO ASSISTENCIAL',
        '8. CERTIDÕES E VALIDAÇÕES',
        '9. TERMO DE ENCERRAMENTO'
    ];
    
    doc.setFontSize(11);
    doc.setTextColor(60, 60, 60);
    
    itensSumario.forEach((item, index) => {
        doc.text(item, 25, y);
        doc.text('........................................................................ ' + (index + 3), 170, y, { align: 'right' });
        y += 8;
    });
    
    doc.setFontSize(8);
    doc.text(`Página ${pageNum}`, 195, 285, { align: 'right' });

    // ===== PÁGINA 3 - DADOS DO CONTRATO =====
    doc.addPage();
    y = 30;
    pageNum++;
    
    doc.setFontSize(14);
    doc.setTextColor(0, 43, 92);
    doc.text('1. DADOS DO CONTRATO', 14, y);
    y += 20;
    
    doc.autoTable({
        startY: y,
        body: [
            ['Número do Contrato:', dados.contrato],
            ['Período de Vigência:', `${dados.dataInicio} a ${dados.dataFim}`],
            ['Valor Total:', `R$ ${formatarMoeda(dados.valorTotal)}`],
            ['Objeto:', 'Gestão, operacionalização e execução dos serviços de saúde'],
            ['Contratada:', 'INSTITUTO DE GESTÃO, OPERACIONALIZAÇÃO E ASSISTÊNCIA À VIDA - INSTITUTO FORZA'],
            ['CNPJ:', '41.697.143/0001-81']
        ],
        theme: 'plain',
        styles: { fontSize: 10 },
        columnStyles: { 0: { cellWidth: 50, fontStyle: 'bold' } }
    });
    
    doc.setFontSize(8);
    doc.text(`Página ${pageNum}`, 195, 285, { align: 'right' });

    // ===== PÁGINA 4 - INFORMAÇÕES DO MUNICÍPIO =====
    doc.addPage();
    y = 30;
    pageNum++;
    
    doc.setFontSize(14);
    doc.setTextColor(0, 43, 92);
    doc.text('2. INFORMAÇÕES DO MUNICÍPIO', 14, y);
    y += 20;
    
    doc.autoTable({
        startY: y,
        body: [
            ['Município:', dados.nome],
            ['Região de Saúde:', dados.regiao],
            ['Prefeito:', dados.prefeito],
            ['Secretário de Saúde:', dados.secretario],
            ['Competência:', competencia]
        ],
        theme: 'plain',
        styles: { fontSize: 10 },
        columnStyles: { 0: { cellWidth: 50, fontStyle: 'bold' } }
    });
    
    doc.setFontSize(8);
    doc.text(`Página ${pageNum}`, 195, 285, { align: 'right' });

    // ===== PÁGINA 5 - RESUMO FINANCEIRO =====
    doc.addPage();
    y = 30;
    pageNum++;
    
    doc.setFontSize(14);
    doc.setTextColor(0, 43, 92);
    doc.text('3. RESUMO FINANCEIRO', 14, y);
    y += 20;
    
    doc.autoTable({
        startY: y,
        head: [['Categoria', 'Valor', '%']],
        body: [
            ['Pagamentos a Fornecedores', `R$ ${formatarMoeda(totalPagamentos)}`, `${((totalPagamentos/totalGeral)*100).toFixed(1)}%`],
            ['Folha de Pagamento', `R$ ${formatarMoeda(totalSalarios)}`, `${((totalSalarios/totalGeral)*100).toFixed(1)}%`],
            ['TOTAL GERAL', `R$ ${formatarMoeda(totalGeral)}`, '100%']
        ],
        theme: 'striped',
        headStyles: { fillColor: [0, 43, 92] }
    });
    
    doc.setFontSize(8);
    doc.text(`Página ${pageNum}`, 195, 285, { align: 'right' });

    // ===== PÁGINA 6 - PAGAMENTOS =====
    doc.addPage();
    y = 30;
    pageNum++;
    
    doc.setFontSize(14);
    doc.setTextColor(0, 43, 92);
    doc.text('4. DEMONSTRATIVO DE PAGAMENTOS', 14, y);
    y += 20;
    
    const pagamentos = [
        ['FAU SOLUÇÕES', 'Serviços Médicos', '30/08/2025', 'R$ 263.886,81', 'Pago'],
        ['LUNA EMP', 'Gêneros Alimentícios', '30/08/2025', 'R$ 19.320,13', 'Pendente'],
        ['INSTITUTO FORZA', 'Taxa Administrativa', '30/08/2025', 'R$ 25.000,00', 'Pago'],
        ['CONTAGER', 'Locação de Imagem', '30/08/2025', 'R$ 4.000,00', 'Pago']
    ];
    
    doc.autoTable({
        startY: y,
        head: [['Fornecedor', 'Descrição', 'Data', 'Valor', 'Status']],
        body: pagamentos,
        theme: 'striped',
        headStyles: { fillColor: [0, 43, 92] }
    });
    
    y = doc.lastAutoTable.finalY + 10;
    doc.setFont('helvetica', 'bold');
    doc.text(`TOTAL PAGAMENTOS: R$ ${formatarMoeda(totalPagamentos)}`, 14, y);
    
    doc.setFontSize(8);
    doc.text(`Página ${pageNum}`, 195, 285, { align: 'right' });

    // ===== PÁGINA 7 - FORNECEDORES =====
    doc.addPage();
    y = 30;
    pageNum++;
    
    doc.setFontSize(14);
    doc.setTextColor(0, 43, 92);
    doc.text('5. RELAÇÃO DE FORNECEDORES', 14, y);
    y += 20;
    
    const fornecedoresTable = fornecedoresDB.map(f => [
        f.nome,
        f.cnpj,
        f.cnd.status,
        f.nf.emitida ? 'Sim' : 'Não',
        f.relatorio.entregue ? 'Sim' : 'Não'
    ]);
    
    doc.autoTable({
        startY: y,
        head: [['Fornecedor', 'CNPJ', 'CND', 'NF', 'Relatório']],
        body: fornecedoresTable,
        theme: 'striped',
        headStyles: { fillColor: [0, 43, 92] }
    });
    
    doc.setFontSize(8);
    doc.text(`Página ${pageNum}`, 195, 285, { align: 'right' });

    // ===== PÁGINA 8 - RH =====
    doc.addPage();
    y = 30;
    pageNum++;
    
    doc.setFontSize(14);
    doc.setTextColor(0, 43, 92);
    doc.text('6. FOLHA DE PAGAMENTO (RH)', 14, y);
    y += 20;
    
    const rhTable = funcionariosRH.map(f => [
        f.nome,
        f.cargo,
        f.admissao,
        `R$ ${formatarMoeda(f.salario)}`,
        f.status
    ]);
    
    doc.autoTable({
        startY: y,
        head: [['Nome', 'Cargo', 'Admissão', 'Salário', 'Status']],
        body: rhTable,
        theme: 'striped',
        headStyles: { fillColor: [0, 43, 92] }
    });
    
    y = doc.lastAutoTable.finalY + 10;
    doc.setFont('helvetica', 'bold');
    doc.text(`TOTAL FOLHA: R$ ${formatarMoeda(totalSalarios)}`, 14, y);
    
    doc.setFontSize(8);
    doc.text(`Página ${pageNum}`, 195, 285, { align: 'right' });

    // ===== PÁGINA 9 - PRODUÇÃO ASSISTENCIAL =====
    doc.addPage();
    y = 30;
    pageNum++;
    
    doc.setFontSize(14);
    doc.setTextColor(0, 43, 92);
    doc.text('7. PRODUÇÃO ASSISTENCIAL', 14, y);
    y += 20;
    
    const producaoTable = [
        ['Atendimentos', '420', '385', '410', '632', '1.847'],
        ['Internações', '28', '32', '30', '34', '124'],
        ['Cirurgias', '8', '7', '9', '8', '32'],
        ['Exames', '589', '612', '634', '621', '2.456']
    ];
    
    doc.autoTable({
        startY: y,
        head: [['Indicador', 'Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Total']],
        body: producaoTable,
        theme: 'striped',
        headStyles: { fillColor: [0, 43, 92] }
    });
    
    doc.setFontSize(8);
    doc.text(`Página ${pageNum}`, 195, 285, { align: 'right' });

    // ===== PÁGINA 10 - CERTIDÕES =====
    doc.addPage();
    y = 30;
    pageNum++;
    
    doc.setFontSize(14);
    doc.setTextColor(0, 43, 92);
    doc.text('8. CERTIDÕES E VALIDAÇÕES', 14, y);
    y += 20;
    
    const certidoesTable = [
        ['Certidão Conjunta FGTS/INSS', '01/08/2025', '31/08/2025', 'Válida'],
        ['Certidão Estadual', '01/08/2025', '31/08/2025', 'Válida'],
        ['Certidão Municipal', '01/08/2025', '31/08/2025', 'A vencer'],
        ['Certidão Trabalhista', '01/08/2025', '31/10/2025', 'Válida']
    ];
    
    doc.autoTable({
        startY: y,
        head: [['Tipo', 'Emissão', 'Validade', 'Status']],
        body: certidoesTable,
        theme: 'striped',
        headStyles: { fillColor: [0, 43, 92] }
    });
    
    doc.setFontSize(8);
    doc.text(`Página ${pageNum}`, 195, 285, { align: 'right' });

    // ===== PÁGINA 11 - TERMO DE ENCERRAMENTO =====
    doc.addPage();
    y = 50;
    pageNum++;
    
    doc.setFontSize(16);
    doc.setTextColor(0, 43, 92);
    doc.text('9. TERMO DE ENCERRAMENTO', 105, y, { align: 'center' });
    y += 30;
    
    doc.setFontSize(11);
    doc.setTextColor(60, 60, 60);
    
    const texto = [
        `Declaramos, para os devidos fins, que as informações contidas neste Livro de`,
        `Prestação de Contas referente à competência de ${competencia} do Município`,
        `de ${dados.nome} refletem a realidade dos gastos e execução dos serviços`,
        `pactuados no Termo de Colaboração ${dados.contrato}, em conformidade`,
        `com as normas estabelecidas pela Secretaria Municipal de Saúde.`
    ];
    
    texto.forEach(linha => {
        doc.text(linha, 105, y, { align: 'center' });
        y += 7;
    });
    
    y += 30;
    
    doc.line(40, y, 90, y);
    doc.line(120, y, 170, y);
    
    y += 5;
    doc.setFont('helvetica', 'bold');
    doc.text('RONEI MIGUEL DE ALBUQUERQUE SILVA', 65, y, { align: 'center' });
    doc.text(dados.secretario, 145, y, { align: 'center' });
    
    y += 5;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text('Presidente - Instituto Forza', 65, y, { align: 'center' });
    doc.text('Secretário Municipal de Saúde', 145, y, { align: 'center' });
    
    y += 20;
    doc.setTextColor(60, 60, 60);
    doc.text(`${dados.nome} - Ceará, ${new Date().toLocaleDateString('pt-BR')}`, 105, y, { align: 'center' });
    
    doc.setFontSize(8);
    doc.text(`Página ${pageNum}`, 195, 285, { align: 'right' });

    doc.save(`Livro_Prestacao_Contas_${dados.nome}_${competencia.replace('/', '_')}.pdf`);
}
    const dados = dadosMunicipios[currentMunicipio];
    const competencia = document.getElementById('competencia').selectedOptions[0].text;
    
    let totalSalarios = funcionariosRH.reduce((acc, f) => acc + f.salario, 0);
    let totalPagamentos = fornecedoresDB.reduce((acc, f) => acc + (f.nf.emitida ? f.nf.valor : 0), 0);
    let totalGeral = totalSalarios + totalPagamentos;
    
    const pagamentos = [
        { fornecedor: 'FAU SOLUÇÕES', descricao: 'Serviços Médicos', valor: 263886.81, status: 'Pago', data: '30/08/2025' },
        { fornecedor: 'LUNA EMP', descricao: 'Gêneros Alimentícios', valor: 19320.13, status: 'Pendente', data: '30/08/2025' },
        { fornecedor: 'INSTITUTO FORZA', descricao: 'Taxa Administrativa', valor: 25000.00, status: 'Pago', data: '30/08/2025' },
        { fornecedor: 'CONTAGER', descricao: 'Locação de Imagem', valor: 4000.00, status: 'Pago', data: '30/08/2025' }
    ];
    
    const producao = [
        { indicador: 'Atendimentos', semana1: 420, semana2: 385, semana3: 410, semana4: 632, total: 1847 },
        { indicador: 'Internações', semana1: 28, semana2: 32, semana3: 30, semana4: 34, total: 124 },
        { indicador: 'Cirurgias', semana1: 8, semana2: 7, semana3: 9, semana4: 8, total: 32 },
        { indicador: 'Exames', semana1: 589, semana2: 612, semana3: 634, semana4: 621, total: 2456 }
    ];
    
    const dataAtual = new Date().toLocaleDateString('pt-BR');
    const horaAtual = new Date().toLocaleTimeString('pt-BR');

    const html = `
        <div class="livro-preview">
            <!-- CAPA -->
            <div class="livro-capa">
                <div class="brasao-grande">⛪</div>
                <h1 class="livro-titulo">MUNICÍPIO DE ${dados.nome.toUpperCase()}</h1>
                <h2 class="livro-subtitulo">SECRETARIA MUNICIPAL DE SAÚDE</h2>
                <h2 class="livro-subtitulo" style="font-size: 1.8rem; margin-top: 30px;">LIVRO DE PRESTAÇÃO DE CONTAS</h2>
                <h3 style="color: ${dados.cor}; margin: 20px 0; font-size: 1.5rem;">${competencia}</h3>
                <p style="margin-top: 50px; color: #6c757d;">Documento gerado em: ${dataAtual} às ${horaAtual}</p>
            </div>

            <!-- SUMÁRIO -->
            <div style="page-break-before: always; margin: 40px 0;">
                <h2 style="color: #002B5C; border-bottom: 2px solid #002B5C; padding-bottom: 10px;">SUMÁRIO</h2>
                <div style="margin: 20px 0;">
                    <div style="display: flex; justify-content: space-between; padding: 8px 0;">
                        <span>1. DADOS DO CONTRATO</span>
                        <span>......................... 03</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 8px 0;">
                        <span>2. INFORMAÇÕES DO MUNICÍPIO</span>
                        <span>......................... 04</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 8px 0;">
                        <span>3. RESUMO FINANCEIRO</span>
                        <span>......................... 05</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 8px 0;">
                        <span>4. DEMONSTRATIVO DE PAGAMENTOS</span>
                        <span>......................... 06</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 8px 0;">
                        <span>5. RELAÇÃO DE FORNECEDORES</span>
                        <span>......................... 07</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 8px 0;">
                        <span>6. FOLHA DE PAGAMENTO (RH)</span>
                        <span>......................... 08</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 8px 0;">
                        <span>7. PRODUÇÃO ASSISTENCIAL</span>
                        <span>......................... 09</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 8px 0;">
                        <span>8. CERTIDÕES E VALIDAÇÕES</span>
                        <span>......................... 10</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 8px 0;">
                        <span>9. TERMO DE ENCERRAMENTO</span>
                        <span>......................... 11</span>
                    </div>
                </div>
            </div>

            <!-- 1. DADOS DO CONTRATO -->
            <div style="page-break-before: always; margin: 40px 0;">
                <h2 style="color: #002B5C; border-bottom: 2px solid #002B5C; padding-bottom: 10px;">1. DADOS DO CONTRATO</h2>
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-top: 20px;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px; width: 200px;"><strong>Número do Contrato:</strong></td>
                            <td style="padding: 10px;">${dados.contrato}</td>
                        </tr>
                        <tr style="background: white;">
                            <td style="padding: 10px;"><strong>Período de Vigência:</strong></td>
                            <td style="padding: 10px;">${dados.dataInicio} a ${dados.dataFim}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px;"><strong>Valor Total do Contrato:</strong></td>
                            <td style="padding: 10px;">R$ ${formatarMoeda(dados.valorTotal)}</td>
                        </tr>
                        <tr style="background: white;">
                            <td style="padding: 10px;"><strong>Objeto:</strong></td>
                            <td style="padding: 10px;">Gestão, operacionalização e execução dos serviços de saúde</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px;"><strong>Contratada:</strong></td>
                            <td style="padding: 10px;">INSTITUTO DE GESTÃO, OPERACIONALIZAÇÃO E ASSISTÊNCIA À VIDA - INSTITUTO FORZA</td>
                        </tr>
                        <tr style="background: white;">
                            <td style="padding: 10px;"><strong>CNPJ:</strong></td>
                            <td style="padding: 10px;">41.697.143/0001-81</td>
                        </tr>
                    </table>
                </div>
            </div>

            <!-- 2. INFORMAÇÕES DO MUNICÍPIO -->
            <div style="page-break-before: always; margin: 40px 0;">
                <h2 style="color: #002B5C; border-bottom: 2px solid #002B5C; padding-bottom: 10px;">2. INFORMAÇÕES DO MUNICÍPIO</h2>
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-top: 20px;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px; width: 200px;"><strong>Município:</strong></td>
                            <td style="padding: 10px;">${dados.nome}</td>
                        </tr>
                        <tr style="background: white;">
                            <td style="padding: 10px;"><strong>Região de Saúde:</strong></td>
                            <td style="padding: 10px;">${dados.regiao}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px;"><strong>Prefeito:</strong></td>
                            <td style="padding: 10px;">${dados.prefeito}</td>
                        </tr>
                        <tr style="background: white;">
                            <td style="padding: 10px;"><strong>Secretário de Saúde:</strong></td>
                            <td style="padding: 10px;">${dados.secretario}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px;"><strong>Competência:</strong></td>
                            <td style="padding: 10px;">${competencia}</td>
                        </tr>
                    </table>
                </div>
            </div>

            <!-- 3. RESUMO FINANCEIRO -->
            <div style="page-break-before: always; margin: 40px 0;">
                <h2 style="color: #002B5C; border-bottom: 2px solid #002B5C; padding-bottom: 10px;">3. RESUMO FINANCEIRO</h2>
                
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 20px 0;">
                    <div style="background: linear-gradient(135deg, #002B5C, #001a3a); color: white; padding: 20px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 0.9rem; opacity: 0.9;">Total de Pagamentos</div>
                        <div style="font-size: 2rem; font-weight: 700; margin: 10px 0;">R$ ${formatarMoeda(totalPagamentos)}</div>
                    </div>
                    <div style="background: linear-gradient(135deg, #28a745, #218838); color: white; padding: 20px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 0.9rem; opacity: 0.9;">Total Folha de Pagamento</div>
                        <div style="font-size: 2rem; font-weight: 700; margin: 10px 0;">R$ ${formatarMoeda(totalSalarios)}</div>
                    </div>
                </div>

                <div style="background: #e9ecef; padding: 20px; border-radius: 8px; text-align: center; margin-top: 20px;">
                    <div style="font-size: 1.2rem;">TOTAL GERAL DA COMPETÊNCIA</div>
                    <div style="font-size: 2.5rem; font-weight: 700; color: #002B5C; margin-top: 10px;">R$ ${formatarMoeda(totalGeral)}</div>
                </div>
            </div>

            <!-- 4. DEMONSTRATIVO DE PAGAMENTOS -->
            <div style="page-break-before: always; margin: 40px 0;">
                <h2 style="color: #002B5C; border-bottom: 2px solid #002B5C; padding-bottom: 10px;">4. DEMONSTRATIVO DE PAGAMENTOS</h2>
                
                <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
                    <thead>
                        <tr style="background: #002B5C; color: white;">
                            <th style="padding: 12px;">Fornecedor</th>
                            <th style="padding: 12px;">Descrição</th>
                            <th style="padding: 12px;">Data</th>
                            <th style="padding: 12px;">Valor</th>
                            <th style="padding: 12px;">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${pagamentos.map(p => `
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">${p.fornecedor}</td>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">${p.descricao}</td>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">${p.data}</td>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6; text-align: right;">R$ ${formatarMoeda(p.valor)}</td>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">
                                    <span style="background: ${p.status === 'Pago' ? '#d4edda' : '#fff3cd'}; color: ${p.status === 'Pago' ? '#155724' : '#856404'}; padding: 4px 10px; border-radius: 20px;">
                                        ${p.status}
                                    </span>
                                </td>
                            </tr>
                        `).join('')}
                        <tr style="background: #f8f9fa; font-weight: 700;">
                            <td colspan="3" style="padding: 12px; text-align: right;">TOTAL</td>
                            <td style="padding: 12px; text-align: right;">R$ ${formatarMoeda(totalPagamentos)}</td>
                            <td style="padding: 12px;"></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- 5. RELAÇÃO DE FORNECEDORES -->
            <div style="page-break-before: always; margin: 40px 0;">
                <h2 style="color: #002B5C; border-bottom: 2px solid #002B5C; padding-bottom: 10px;">5. RELAÇÃO DE FORNECEDORES</h2>
                
                <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
                    <thead>
                        <tr style="background: #002B5C; color: white;">
                            <th style="padding: 12px;">Fornecedor</th>
                            <th style="padding: 12px;">CNPJ</th>
                            <th style="padding: 12px;">CND</th>
                            <th style="padding: 12px;">NF</th>
                            <th style="padding: 12px;">Contrato</th>
                            <th style="padding: 12px;">Relatório</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${fornecedoresDB.map(f => `
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">${f.nome}</td>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">${f.cnpj}</td>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">
                                    <span style="color: ${f.cnd.status === 'válida' ? '#28a745' : '#dc3545'};">
                                        ${f.cnd.status === 'válida' ? '✅' : '❌'} ${f.cnd.status}
                                        ${f.cnd.status === 'válida' ? `<br><small>Válida até ${f.cnd.validade}</small>` : ''}
                                    </span>
                                </td>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">
                                    ${f.nf.emitida ? 
                                        `✅ ${f.nf.numero}<br><small>R$ ${formatarMoeda(f.nf.valor)}</small>` : 
                                        '❌ Não emitida'}
                                </td>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">
                                    ${f.contrato.numero}<br>
                                    <small>${f.contrato.inicio} a ${f.contrato.fim}</small>
                                </td>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">
                                    ${f.relatorio.entregue ? 
                                        `✅ ${f.relatorio.periodo}` : 
                                        '❌ Pendente'}
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>

            <!-- 6. FOLHA DE PAGAMENTO (RH) -->
            <div style="page-break-before: always; margin: 40px 0;">
                <h2 style="color: #002B5C; border-bottom: 2px solid #002B5C; padding-bottom: 10px;">6. FOLHA DE PAGAMENTO (RH)</h2>
                
                <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
                    <thead>
                        <tr style="background: #002B5C; color: white;">
                            <th style="padding: 12px;">Nome</th>
                            <th style="padding: 12px;">Cargo</th>
                            <th style="padding: 12px;">Admissão</th>
                            <th style="padding: 12px;">Salário</th>
                            <th style="padding: 12px;">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${funcionariosRH.map(f => `
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">${f.nome}</td>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">${f.cargo}</td>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">${f.admissao}</td>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6; text-align: right;">R$ ${formatarMoeda(f.salario)}</td>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">
                                    <span style="background: ${f.status === 'Ativo' ? '#d4edda' : '#f8d7da'}; color: ${f.status === 'Ativo' ? '#155724' : '#721c24'}; padding: 4px 10px; border-radius: 20px;">
                                        ${f.status}
                                    </span>
                                </td>
                            </tr>
                        `).join('')}
                        <tr style="background: #f8f9fa; font-weight: 700;">
                            <td colspan="3" style="padding: 12px; text-align: right;">TOTAL</td>
                            <td style="padding: 12px; text-align: right;">R$ ${formatarMoeda(totalSalarios)}</td>
                            <td style="padding: 12px;"></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- 7. PRODUÇÃO ASSISTENCIAL -->
            <div style="page-break-before: always; margin: 40px 0;">
                <h2 style="color: #002B5C; border-bottom: 2px solid #002B5C; padding-bottom: 10px;">7. PRODUÇÃO ASSISTENCIAL</h2>
                
                <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
                    <thead>
                        <tr style="background: #002B5C; color: white;">
                            <th style="padding: 12px;">Indicador</th>
                            <th style="padding: 12px;">Semana 1</th>
                            <th style="padding: 12px;">Semana 2</th>
                            <th style="padding: 12px;">Semana 3</th>
                            <th style="padding: 12px;">Semana 4</th>
                            <th style="padding: 12px;">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${producao.map(p => `
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">${p.indicador}</td>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6; text-align: center;">${p.semana1}</td>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6; text-align: center;">${p.semana2}</td>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6; text-align: center;">${p.semana3}</td>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6; text-align: center;">${p.semana4}</td>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6; text-align: center; font-weight: 700;">${p.total}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>

            <!-- 8. CERTIDÕES E VALIDAÇÕES -->
            <div style="page-break-before: always; margin: 40px 0;">
                <h2 style="color: #002B5C; border-bottom: 2px solid #002B5C; padding-bottom: 10px;">8. CERTIDÕES E VALIDAÇÕES</h2>
                
                <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
                    <thead>
                        <tr style="background: #002B5C; color: white;">
                            <th style="padding: 12px;">Tipo</th>
                            <th style="padding: 12px;">Emissão</th>
                            <th style="padding: 12px;">Validade</th>
                            <th style="padding: 12px;">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">Certidão Conjunta FGTS/INSS</td>
                            <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">01/08/2025</td>
                            <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">31/08/2025</td>
                            <td style="padding: 10px; border-bottom: 1px solid #dee2e6;"><span style="background: #d4edda; color: #155724; padding: 4px 10px; border-radius: 20px;">Válida</span></td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">Certidão Estadual</td>
                            <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">01/08/2025</td>
                            <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">31/08/2025</td>
                            <td style="padding: 10px; border-bottom: 1px solid #dee2e6;"><span style="background: #d4edda; color: #155724; padding: 4px 10px; border-radius: 20px;">Válida</span></td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">Certidão Municipal</td>
                            <td style="padding: 10px; border-bottom: 1px solid #de