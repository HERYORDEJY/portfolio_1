export function useGradientTextClass({bgGradientTo, bgGradientStart, bgGradientStop}: {bgGradientTo: string, bgGradientStart: string, bgGradientStop: string}) {
 
 
  return `inline ${bgGradientTo} ${bgGradientStart} ${bgGradientStop} text-transparent bg-clip-text`
}

