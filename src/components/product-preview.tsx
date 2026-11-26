import {
  ArrowUpRight,
  Bell,
  ChartNoAxesCombined,
  ClipboardList,
  HardHat,
  LayoutDashboard,
  Users,
} from "lucide-react";

export function ProductPreview() {
  return (
    <div className="product-scene">
      <div
        className="product-window"
        aria-label="Interface conceitual do Legacy Gestão com dados demonstrativos"
      >
        <div className="window-bar">
          <span className="window-dots">
            <i />
            <i />
            <i />
          </span>
          <span>LEGACY / GESTÃO</span>
          <span>VISÃO CONCEITUAL</span>
        </div>
        <div className="product-ui">
          <aside>
            <b>
              LEGACY<span>GESTÃO</span>
            </b>
            <div className="ui-nav current">
              <LayoutDashboard size={15} /> Visão geral
            </div>
            <div className="ui-nav">
              <HardHat size={15} /> Obras
            </div>
            <div className="ui-nav">
              <Users size={15} /> Equipes
            </div>
            <div className="ui-nav">
              <ClipboardList size={15} /> Operações
            </div>
            <div className="ui-nav">
              <ChartNoAxesCombined size={15} /> Indicadores
            </div>
          </aside>
          <div className="ui-main">
            <div className="ui-top">
              <div>
                <small>PAINEL DE CONTROLE</small>
                <h3>Visão geral</h3>
              </div>
              <Bell size={16} />
            </div>
            <div className="ui-divider" />
            <div className="ui-summary">
              <span>Informação organizada para decisões mais claras.</span>
              <ArrowUpRight size={20} />
            </div>
            <div className="ui-columns">
              <div className="ui-board">
                <small>ACOMPANHAMENTO DE OBRAS</small>
                <div className="ui-bars">
                  {[28, 43, 38, 61, 53, 76, 68, 88, 73, 94].map((height, i) => (
                    <i key={i} style={{ height: `${height}%` }} />
                  ))}
                </div>
                <div className="ui-axis">
                  <span>JAN</span>
                  <span>FEV</span>
                  <span>MAR</span>
                  <span>ABR</span>
                  <span>MAI</span>
                </div>
              </div>
              <div className="ui-activity">
                <small>FLUXO DE TRABALHO</small>
                <p>
                  <i /> Planejamento
                </p>
                <p>
                  <i /> Execução
                </p>
                <p>
                  <i /> Acompanhamento
                </p>
                <p>
                  <i /> Entrega
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="phone">
        <div className="phone-notch" />
        <small>LEGACY GESTÃO</small>
        <b>Obras</b>
        <span className="phone-line" />
        <span className="phone-line short" />
        <div className="phone-panel">
          <i />
          <span>
            Visão da operação
            <br />
            <small>Em um só lugar</small>
          </span>
        </div>
        <div className="phone-mini">
          <span />
          <span />
          <span />
        </div>
      </div>
      <p className="demo-note">
        Interface conceitual · dados demonstrativos · produto em desenvolvimento
      </p>
    </div>
  );
}
