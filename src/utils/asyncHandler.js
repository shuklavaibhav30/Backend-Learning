const asyncHandler=(reqHandler)=>(req,res,next)=>{
        return Promise.resolve(reqHandler(req,res,next)).catch((err)=>next(err))
}


export {asyncHandler}


// const asyncHandler=()=>{()={}}
//function passed to a function
// const asyncHandler=(func)=> async ()=>{}
/*
const asyncHandler=(fn)=>async(req,res,then)=>{
    try {
        await fn(req,res,next)
        
    } catch (err) {
        res.status(err.code||500).json({
            success:false,
            message:err.message
        })
        
    }
}*/