import React from "react";
import "./Preview.css";
import imgPreview from "../preview/conf.jpg";

function Preview() {
  return (
    <div>
      <div className = "image">
        <img src={imgPreview} alt="ostis" />
      </div>
      <div className="text">
        <b>OSTIS Сonferences</b> are annual international scientific and
        technical conferences that are held in mid-February in Minsk on the
        basis of BSUIR and are aimed at the development of Open Semantic
        Technologies for Intelligent Systems (OSTIS).
        <p>
          The composition of such a comprehensive mass technology of component
          design (modular, assembly design) of intelligent systems includes:
        </p>
        <br />- a library of typical, reusable and semantically compatible
        components of intelligent systems (components of knowledge bases,
        intelligent problem solvers, intelligent user interfaces);
        <br />- a family of compatible languages ​​for the semantic
        representation of knowledge of various kinds, providing semantic
        compatibility not only for reusable components of intelligent systems,
        but also for entire intelligent systems;
        <br />- a family of compatible semantic problem solving models.
      </div>
      <div className="text">
        <p>
          Fundamental problems, the solution of which is the basis of this
          technology, are: <br />
        </p>
        - semantic representation of knowledge; <br />
        - intelligent systems design technology based on the semantic
        representation of knowledge; <br />
        - the problem of ensuring semantic compatibility of intelligent systems
        and their components; <br />- the problem of ensuring the independence
        of abstract semantic models of intelligent systems and the design
        technology of such models from various options of their technical
        implementation.
      </div>
      <div className="text">
        <p>
          The main goal of the annual OSTIS (Open Semantic Technology for
          Intelligent Systems) conferences is:
        </p>
        <br /> - creating conditions for expanding cooperation between various
        scientific schools, universities and commercial organizations aimed at
        the creation of effective technologies for the design of intelligent
        systems based on the semantic representation of knowledge; <br /> - the
        formation of students, undergraduates and graduate students of a serious
        interest in scientific research in the field of artificial intelligence;{" "}
        <br />- expansion of cooperation of specialists in the field of
        artificial intelligence with commercial structures.
      </div>
      <div className="text">
        <p> Conference format:</p>
        Plenary reports (reports up to 30 minutes) Breakout sessions (reports up
        to 15 minutes, short reports up to 5 minutes) Round tables dedicated to
        the discussion of various issues of such a technology creating
        Exhibition presentations of reports that enable each speaker to
        demonstrate the results of their development at the exhibition
        (presentations up to 30 minutes) Conference working languages: Russian,
        Belarusian, English.
      </div>
      <div className="text">
        <p>Directions of the OSTIS conferences:</p>
        <br /> - Principles underlying the semantic representation of knowledge
        and their unification <br /> - Typology of knowledge and features of the
        semantic representation of various types of knowledge and metaknowledge
        <br /> - Relationships between knowledge and relationships defined on a
        set of knowledge <br /> - The semantic structure of a global knowledge
        base integrating various accumulated knowledge <br /> - Programming
        languages ​​oriented to parallel processing of semantic representation
        of knowledge bases
        <br /> - Problem solving models based on the processing of knowledge,
        carried out directly at the level of the semantic representation of the
        processed knowledge. <br /> - Semantic models of information retrieval,
        knowledge integration, analysis of the correctness and quality of
        knowledge bases, information garbage collection, optimization of
        knowledge bases, deductive and inductive inference in knowledge bases,
        plausible reasoning, pattern recognition, intelligent control.
        Integration of various problem solving models <br /> - Semantic models
        of perceiving information about the external environment and mapping
        this information into a knowledge base <br /> - Semantic models of
        multimodal user interfaces of intelligent systems, which are based on
        the semantic representation of the knowledge they use, and the
        unification of these models <br /> - Semantic models of natural-language
        user interfaces of intelligent systems. <br /> - The structure of the
        semantic representation of linguistic knowledge bases that describe
        natural languages ​​and provide a solution to the problems of natural
        language texts understanding and speech messages understanding, as well
        as the synthesis of natural language texts and speech messages that are
        semantically equivalent to given fragments of knowledge bases <br /> -
        Integrated complex logical-semantic models of intelligent systems based
        on the semantic representation of knowledge and their unification <br />{" "}
        - Various technical platforms and implementation options for
        interpreters of unified logical-semantic models of intelligent systems
        based on the semantic representation of knowledge
        <br /> - Means and methods based on the semantic representation of
        knowledge and focused on the design of various standard components of
        intelligent systems (knowledge bases, programs, problem solvers,
        interfaces) <br />- Means and methods based on the semantic
        representation of knowledge and focused on the integrated design of
        various classes of intelligent systems (intelligent help systems,
        intelligent training systems, intelligent control systems, intelligent
        robotic systems, intelligent design support systems, etc.) <br /> -
        Applied intelligent systems based on the semantic representation of the
        knowledge they use
      </div>
    </div>
  );
}

export default Preview;
