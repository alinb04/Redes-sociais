// Conexão com o Supabase — usado em todas as páginas do app
const SUPABASE_URL = "https://rgypkfzpakkxyxhfjlti.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_IEpoY0WFnnl7Xez9ZRvWmA_rbUZscw5";

// Chamamos de "supabaseClient" (e não "supabase") para não conflitar
// com o objeto global que a biblioteca do CDN já cria.
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Função auxiliar: garante que o usuário está logado.
// Se não estiver, manda de volta pra tela de login.
async function exigirLogin() {
  const { data: { session } } = await supabaseClient.auth.getSession();

  if (!session) {
    window.location.href = "index.html";
    return null;
  }

  return session.user;
}
