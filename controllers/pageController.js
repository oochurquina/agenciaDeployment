import {Viaje} from '../models/Viaje.js';
import {Testimonial  } from "../models/Testimoniales.js";

const pageInicio = async (req,res)=>{
    // consultar 3 viajes del modelo Viaje
    const promiseDB = [];
    promiseDB.push( Viaje.findAll({limit:3}));
    promiseDB.push( Testimonial.findAll({limit:3}));

    try {
        const result = await Promise.all(promiseDB)
        const [viajes,testimoniales] = result;
        res.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            viajes,
            testimoniales
        });
        
    } catch (error) {
        console.log(error);
    }
}
const pageNosotros = (req,res)=>{
    res.render('nosotros',{
        pagina: 'Nosotros'
    });
}
const pageViajes = async (req,res)=>{
    // consultar viajes
    const viajes = await Viaje.findAll();
    // console.log(viajes);
    res.render('viajes',{pagina:'próximos viajes',viajes});
}
const pageTestimoniales= async (req,res)=>{
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales',{pagina: 'Testimoniales', testimoniales});
    } catch (error) {
        console.log(error);
    }
}

const pageDetalleViaje =  async (req,res)=>{
    try {
        const {slug} = req.params;
        // console.log(req.params);
        const result = await Viaje.findOne({where: {slug}});
        res.render('viaje',{
            pagina: 'Informacion Viaje',
            result
        });
        
    } catch (error) {
        console.log(error);        
    }
}
export {
    pageInicio,
    pageNosotros,
    pageViajes,
    pageTestimoniales,
    pageDetalleViaje
}