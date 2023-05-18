import "reflect-metadata"
import "../../container"
import cors from "cors";
import 'express-async-errors'
import express, { Request, Response, NextFunction} from "express";
import { AppDataSource } from "../typeorm";
import AppError from "../../errors/AppError";
import routes from "./routes";
import upload from "../../../config/upload";
import axios from "axios"


const app = express();

app.use(cors());
// app.use(express.json());
app.use(express.json({limit: '50mb'}));
app.use(routes)

app.use("/companyy-logo", express.static(`${upload.tmpFolder}/company`))

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    })
  }
  console.log(err)
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})

app.get("/", async (request, response) => {
    // const image = await axios.get("https://elint-payroll-images.s3.us-east-1.amazonaws.com/company/9e4e900f834ef40bd534db8ca08a1498-1534421123621.jpeg", {responseType: 'arraybuffer'});
    // const base64Image = Buffer.from(image.data).toString('base64')
    // console.log(base64Image)
    // var fonts = {
    //   Helvetica: {
    //     normal: 'Helvetica',
    //     bold: 'Helvetica-Bold',
    //     italics: 'Helvetica-Oblique',
    //     bolditalics: 'Helvetica-BoldOblique'
    //   }
    // };
    // const printer = new PdfPrinter(fonts)

    // const docDefinitions: TDocumentDefinitions = {
    //   defaultStyle: { font: "Helvetica"},
    //   content: [
    //     { text: "tpmam,d"},
    //     {
    //     //  nodeName:"IMG" as any,
    //      image:"img_ref_0",
    //      style:["html-img"]
    //     }
    //   ],
    //   images: {
    //         "img_ref_0": base64Image
    //     },
    // } 

    // const pdfDoc = printer.createPdfKitDocument(docDefinitions)

    // pdfDoc.pipe(fs.createWriteStream("Relatorio.pdf"))

    // pdfDoc.end()
    return response.json({message: "hello world"})
})


const server = async () => {
  try {
      await AppDataSource.initialize();
      console.log("database initialize")

      app.listen(process.env.PORT || 3333)
      console.log("server is listening On port:", 3333)
      
  } catch (err) {
      console.log(err);
  }
}

server();




