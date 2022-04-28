async function handler(req, res) {
  return res.status(301).redirect(`${process.env.NEXT_PUBLIC_DOMAIN}/static/indaytrending-thumbnail.png`);
}

export default handler;
