const appMap = {
  car: () => import('./products/car/frontend/public/App'),
  ai: () => import('./products/ai/frontend/public/App'),
}

export async function loadApp(name: string) {
  const loader = appMap[name as keyof typeof appMap]

  if (!loader) throw new Error("App not found")

  const module = await loader()
  return module.default
}
