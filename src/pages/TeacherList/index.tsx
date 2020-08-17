import React from "react";

import PageHeader from "../../components/PageHeader";
import "./styles.css"
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os professores disponíveis.">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
              { value: 'Ed. Física', label: 'Ed. Física' },
              { value: 'História', label: 'História' }
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input type="time" name="time" label="Hora"/>
        </form>
      </PageHeader>

      <main>
        <TeacherItem name="Diego Nogueira"
                     image="https://avatars3.githubusercontent.com/u/36142377?s=460&u=da2f844d72e0c60d5bfce03b188c481b0f2efc63&v=4"
                     price="R$ 80,00" subject="Química">
          <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br/><br/>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais
            de 200.000 pessoas já passaram por uma das minhas explosões.
          </p>
        </TeacherItem>
        <TeacherItem name="Marco Rubens"
                     image="https://3.bp.blogspot.com/-_0EAG6huhso/XLPC0mEPZII/AAAAAAAAWu8/2SEwXnAm1kQBF5OUgi4RzfEBeivvpe0TQCK4BGAYYCw/s1600/AVATAR%2BPEDRO.jpeg"
                     price="R$ 120,00" subject="Educação Física">
          <p>
            Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o
            crescimento de quem se interessar.
            <br/><br/>
            Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte
            condição: "Aprenda a fazer dinheiro com isso!"
          </p>
        </TeacherItem>
        <TeacherItem name="Ana Sandressa"
                     image="https://i.pinimg.com/originals/19/87/90/198790eb7e08830027c1ae1686496c72.png"
                     price="R$ 150,00" subject="Geografia">
          <p>
            As vezes não sei nem onde eu tô, mas consigo me localizar facilmente em qualquer lugar. Tenho memória
            fotográfica e nunca fico perdido.
            <br/><br/>
            Eu ensino a galera como não se perder na vida, com lições geográficas simples pra você nunca mais precisar
            de mapa na sua bela vida.
          </p>
        </TeacherItem>
        <TeacherItem name="Bella Souza"
                     image="https://image.freepik.com/vector-gratis/foto-perfil-personaje-dibujos-animados-avatar-mujer-joven_18591-55054.jpg"
                     price="R$ 200,00" subject="Programação">
          <p>
            Programadora full-stack, apaixonada pelas melhores tecnologias de desenvolvimento back-end, front-end e
            mobile.
          </p>
        </TeacherItem>
      </main>
    </div>
  );
}

export default TeacherList;