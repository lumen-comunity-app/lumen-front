import type { Metadata } from "next";
import { PolicyPage } from "../ui";

export const metadata: Metadata = {
  title: "Exclus\u00e3o de conta | Lumen",
  description:
    "Como solicitar a exclus\u00e3o da sua conta Lumen, quais dados s\u00e3o apagados ou mantidos e por quanto tempo.",
};

export default function DeleteAccountPage() {
  return (
    <PolicyPage
      eyebrow="SUA CONTA E SEUS DADOS"
      title={"Exclus\u00e3o de conta"}
      intro={"Esta p\u00e1gina explica como solicitar a exclus\u00e3o da sua conta no aplicativo Lumen e o que acontece com as informa\u00e7\u00f5es associadas a ela."}
    >
      <p className="policy-lead">
        Voc&ecirc; pode iniciar a exclus&atilde;o a qualquer momento pelo aplicativo. A
        solicita&ccedil;&atilde;o encerra o acesso &agrave; conta e inicia a remo&ccedil;&atilde;o ou
        desidentifica&ccedil;&atilde;o dos dados descritos abaixo. A exclus&atilde;o &eacute; irrevers&iacute;vel;
        valores j&aacute; gastos na conta n&atilde;o s&atilde;o devolvidos.
      </p>

      <section>
        <h2>Como solicitar pelo aplicativo</h2>
        <ol>
          <li>Abra o Lumen e acesse o seu perfil.</li>
          <li>Toque no &iacute;cone de configura&ccedil;&otilde;es.</li>
          <li>Na se&ccedil;&atilde;o <strong>Conta</strong>, escolha <strong>Excluir conta</strong>.</li>
          <li>Leia a confirma&ccedil;&atilde;o e digite <strong>EXCLUIR</strong>.</li>
          <li>Toque em <strong>Excluir minha conta</strong> para concluir.</li>
        </ol>
        <p>
          O acesso &eacute; encerrado e as sess&otilde;es de autentica&ccedil;&atilde;o s&atilde;o revogadas ap&oacute;s a
          confirma&ccedil;&atilde;o. Se voc&ecirc; n&atilde;o conseguir entrar no aplicativo, envie a
          solicita&ccedil;&atilde;o para{" "}
          <a href="mailto:lumen.community.ofc@gmail.com?subject=Solicita%C3%A7%C3%A3o%20de%20exclus%C3%A3o%20de%20conta%20Lumen">
            lumen.community.ofc@gmail.com
          </a>
          . Informe seu nome de usu&aacute;rio e o e-mail usado no cadastro para
          localizarmos a conta. Podemos pedir informa&ccedil;&otilde;es adicionais para
          confirmar que o pedido &eacute; seu; n&atilde;o envie sua senha.
        </p>
      </section>

      <section>
        <h2>Dados removidos ou desidentificados</h2>
        <ul>
          <li>
            <strong>Conta e perfil:</strong> os v&iacute;nculos de login (incluindo os
            identificadores e e-mails de provedores conectados) s&atilde;o removidos.
            O nome e o identificador p&uacute;blico s&atilde;o substitu&iacute;dos por valores
            gen&eacute;ricos, e a biografia, o t&iacute;tulo do perfil e a imagem de avatar
            s&atilde;o apagados.
          </li>
          <li>
            <strong>Publica&ccedil;&otilde;es da comunidade:</strong> publica&ccedil;&otilde;es feitas pela
            conta e os coment&aacute;rios, curtidas, votos, den&uacute;ncias e registros de
            modera&ccedil;&atilde;o diretamente relacionados a elas s&atilde;o removidos. A limpeza
            normalmente ocorre durante a solicita&ccedil;&atilde;o; se houver uma falha
            t&eacute;cnica, o sistema tenta novamente automaticamente.
          </li>
        </ul>
      </section>

      <section>
        <h2>Dados que podem ser mantidos</h2>
        <ul>
          <li>
            <strong>Registro interno da conta:</strong> a conta fica marcada
            como exclu&iacute;da. O identificador interno e alguns metadados
            operacionais, configura&ccedil;&otilde;es e registros de atividade podem ser
            mantidos para seguran&ccedil;a, integridade do servi&ccedil;o e cumprimento de
            obriga&ccedil;&otilde;es aplic&aacute;veis.
          </li>
          <li>
            <strong>Outros registros ligados &agrave; conta:</strong> hist&oacute;rias e
            cap&iacute;tulos, mensagens, metas, rela&ccedil;&otilde;es sociais, notifica&ccedil;&otilde;es e
            registros de carteira ou compras n&atilde;o s&atilde;o apagados pela rotina atual
            de exclus&atilde;o. Esses registros podem continuar associados ao
            identificador interno, enquanto o perfil p&uacute;blico aparece
            desidentificado.
          </li>
          <li>
            <strong>Sess&otilde;es:</strong> as sess&otilde;es s&atilde;o revogadas quando a
            solicita&ccedil;&atilde;o &eacute; conclu&iacute;da. O prazo m&aacute;ximo configurado para a
            validade de uma sess&atilde;o de autentica&ccedil;&atilde;o &eacute; de 30 dias; os registros
            s&atilde;o removidos automaticamente ap&oacute;s o vencimento.
          </li>
        </ul>
        <p>
          Hoje, o sistema n&atilde;o define um prazo fixo para apagar o registro
          interno desidentificado da conta ou os demais registros mantidos. A
          limpeza de publica&ccedil;&otilde;es pode ser repetida automaticamente caso a
          tentativa inicial falhe, mas n&atilde;o h&aacute; um prazo adicional garantido para
          essa tentativa. Para d&uacute;vidas sobre um registro espec&iacute;fico ou para
          solicitar ajuda, escreva para{" "}
          <a href="mailto:lumen.community.ofc@gmail.com">
            lumen.community.ofc@gmail.com
          </a>
          .
        </p>
      </section>
    </PolicyPage>
  );
}
