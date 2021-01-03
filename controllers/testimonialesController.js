import { Testimonial } from "../models/Testimoniales.js";

const addTestimoniales = async (req,res) => {
    const {nombre,correo,mensaje}= req.body;
    const errores= [];
    if (nombre.trim()===''){
        errores.push({
            status: 401,
            msj:'El nombre esta vacio'
        });
    }
    if (correo.trim()===''){
        errores.push({
            status: 401,
            msj: 'El email esta vacio'
        });
    }
    if (mensaje.trim()===''){
        errores.push({
            status: 401,
            msj: 'El mensaje esta vacio'
        });
    }
   
    if (errores.length>0){
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    } else {
        // almacenar en la bd
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimoniales')
            
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    addTestimoniales
}