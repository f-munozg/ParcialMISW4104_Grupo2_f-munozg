export class Planta {
  public id: number;
  public nombre_comun: string;
  public nombre_cientifico: string;
  public tipo: string;
  public altura_maxima: number;
  public clima: string;
  public sustrato_siembra: string;

  public constructor (id: number, nombre_comun: string, nombre_cientifico: string, tipo: string, altura_maxima: number, clima: string, sustrato_siembra: string){
    this.id = id;
    this.nombre_comun = nombre_comun;
    this.nombre_cientifico = nombre_cientifico;
    this.tipo = tipo;
    this.altura_maxima = altura_maxima;
    this.clima = clima;
    this.sustrato_siembra = sustrato_siembra;
  }
}
