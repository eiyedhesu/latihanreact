import React from "react";
import { Form,Button, Container, Row, Col, FormGroup} from "react-bootstrap";

export default function Registrasi() {
return (
    <Container>
      <div class="text-white bg-dark" >
       <Row >
        <Col ><h5>Data Diri</h5></Col>
       </Row>
       </div>
        <Row>
            <Col> 
                <Form md='6'>
                   <Form.Label>Nama Lengkap</Form.Label>
                   <Form.Control type="text" placeholder="Nama Lengkap Anda" />
                   <Row>
                    <Col>
                    <Form.Label>Tempat Lahir</Form.Label>
                    <Form.Control type="text" placeholder="Contoh : Jakarta" />
                   <Form.Label>Kewarganegaraan</Form.Label>
                   <Form.Select>
                    <option>Pilih Kewarganegaraan</option>
                    <option>Warga Negara Indonesia</option>
                    <option>Warga Negara Asing</option>
                     </Form.Select>
                    </Col>
                    <Col>
                    <Form.Label>Tanggal Lahir</Form.Label>
                    <Form.Control type="text" placeholder="Contoh : 14/02/2000" />
                   <Form.Label>No. Telepon</Form.Label>
                   <Form.Control type="text" placeholder="Masukan No. Telp" />
                   <br></br>
                    </Col>
                   </Row>
                 </Form>
            </Col>
            <Col>
            <Form.Label>Nomor Induk Kependudukan</Form.Label>
                    <Form.Control type="text" placeholder="Masukan Nomor NIK" />
                   <Form.Label>Jenis Kelamin</Form.Label>
                   <Form.Select>
                    <option>Pilih Jenis Kelamin</option>
                    <option>Laki - Laki</option>
                    <option>Perempuan</option>
                     </Form.Select>
            
            </Col>
        </Row>
        <div class="text-white bg-dark" >
       <Row >
        <Col ><h5>Data Alamat</h5></Col>
       </Row>
       </div>
        <Row>
            <Col> 
                <Form>
                    
                   <Form.Label column sm = "3">Alamat Lengkap</Form.Label>
                   <Form.Control as="textarea" />
                   <Row>
                    <Col>
                    <Form.Label>Provinsi</Form.Label>
                    <Form.Control type="text" placeholder="Contoh : Jawa Barat" />
                   <Form.Label>Kota/Kabupaten</Form.Label>
                   <Form.Control type="text" placeholder=" Contoh : Kota Bandung" />
                   <Form.Label>Kecamatan</Form.Label>
                   <Form.Control type="text" placeholder="Nama Kecamatan" />
                    </Col>
                    <Col>
                    <Form.Label>Kelurahan</Form.Label>
                    <Form.Control type="text" placeholder="Nama Kelurahan" />
                   <Form.Label>Kode Pos</Form.Label>
                   <Form.Control type="text" placeholder="Contoh : 10000" />
                    </Col>
                   </Row>
                
                 </Form>
                 <br></br>
            </Col>
        </Row>
        <div class="text-white bg-dark" >
       <Row >
        <Col ><h5>Data Pendidikan</h5></Col>
       </Row>
       </div>
        <Row>
            <Col> 
                <Form md='6'>
                   <Row>
                    <Col>
                    <Form.Label>Pendidikan Terakhir</Form.Label>
                    <Form.Select>
                    <option>Pilih</option>
                    <option>SMA</option>
                    <option>SMK</option>
                    <option>D1</option>
                    <option>D2</option>
                    <option>D3</option>
                    <option>D4</option>
                    <option>S1</option>
                    <option>S2</option>
                     </Form.Select>
                   <Form.Label>Jurusan</Form.Label>
                   <Form.Control type="text" placeholder="Masukan Jurusan" />
                    </Col>
                    <Col>
                    <Form.Label>Nilai Akhir</Form.Label>
                   <Form.Control type="text" placeholder="Masukan Nilai Akhir" />
                    </Col>
                   </Row>
                 </Form>
            </Col>
            <Col>
            <Form.Label>Nama Sekolah / Universitas</Form.Label>
                    <Form.Control type="text" placeholder="Masukan Nama Sekolah/Universitas" />
                  
            </Col>
        </Row>
        <br></br>
        <div class="text-white bg-dark" >
       <Row >
        <Col ><h5>Data Akun</h5></Col>
       </Row>
       </div>
        <Row>
            <Col> 
                <Form >
                <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Masukan Username" />
                 </Form>
            </Col>
            <Col>
            <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Masukan Email" />
            </Col>
            <Col>
            <Form.Label>Password</Form.Label>
                    <Form.Control type="text" placeholder="Masukan Password" />
            </Col>
           
        </Row>
    </Container>
)
}