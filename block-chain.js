function blockChain(data, prev = { index: 0, hash: "0" }) {
  const l = prev.index + 1;
  let hash = hashCode(l + prev.hash + JSON.stringify(data));
  return {
    index: l,
    data: data,
    prev: prev,
    hash: hash,
    chain(data1) {
      return blockChain(data1, this);
    },
  };
}
