export function capitalizePathParam(param) {
  return param.replace(/-/g, ' ').replace(/(?: |\b)(\w)/g, function(key, p1) {
    return key.toUpperCase();    
  })
}