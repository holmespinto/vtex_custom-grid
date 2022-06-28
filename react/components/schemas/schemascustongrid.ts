const customGridSchemas = {

  title: "Grid Custom Grid",
  type:"object",
  properties:{
    gridType:{
      title:"Tipo de Grilla",
      type:'number',
      enum:[
        1,
        2,
        3,
        4
      ]
    }
  }

}
export default customGridSchemas
