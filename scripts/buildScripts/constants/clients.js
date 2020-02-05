const clients = {
  pinnacol: { friendly: 'Pinnacol', prefix: 'Pinnacol'},
};

export function getFriendlyName() {
  const vendorKey = process.env.CLIENT_KEY;

  return vendorKey && Object.keys(clients).indexOf(vendorKey.toLowerCase()) >= 0 ?
    clients[vendorKey.toLowerCase()].friendly :
    '';
}

export function getClientPrefix() {
  const vendorKey = process.env.CLIENT_KEY;

  return vendorKey && Object.keys(clients).indexOf(vendorKey.toLowerCase()) >= 0 ?
    clients[vendorKey.toLowerCase()].prefix :
    '';
}
