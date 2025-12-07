function getAcceleration(k) {
  const a = isFinite(k.f / k.m) ? k.f / k.m : null;
  const b = isFinite(k.Δv / k.Δt) ? k.Δv / k.Δt : null;
  const c = isFinite((2 * k.d) / (k.t * k.t)) ? (2 * k.d) / (k.t * k.t) : null;
  return a ?? b ?? c ?? "impossible";
}
