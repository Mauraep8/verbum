--
-- PostgreSQL database dump
--

-- Dumped from database version 14.8
-- Dumped by pg_dump version 14.8

-- Started on 2024-12-29 20:32:37

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3324 (class 0 OID 24681)
-- Dependencies: 213
-- Data for Name: checkedState; Type: TABLE DATA; Schema: initialState; Owner: postgres
--

INSERT INTO "initialState"."checkedState" (value, status, category, "apiFormatTxt", id, "apiFormatInt") VALUES ('1er', true, 'person', NULL, 1, 1);
INSERT INTO "initialState"."checkedState" (value, status, category, "apiFormatTxt", id, "apiFormatInt") VALUES ('2ème', true, 'person', NULL, 2, 2);
INSERT INTO "initialState"."checkedState" (value, status, category, "apiFormatTxt", id, "apiFormatInt") VALUES ('3ème', true, 'person', NULL, 3, 3);
INSERT INTO "initialState"."checkedState" (value, status, category, "apiFormatTxt", id, "apiFormatInt") VALUES ('féminin', true, 'gender', NULL, 4, NULL);
INSERT INTO "initialState"."checkedState" (value, status, category, "apiFormatTxt", id, "apiFormatInt") VALUES ('masculin', true, 'gender', NULL, 5, NULL);
INSERT INTO "initialState"."checkedState" (value, status, category, "apiFormatTxt", id, "apiFormatInt") VALUES ('singulier', true, 'number', NULL, 6, 1);
INSERT INTO "initialState"."checkedState" (value, status, category, "apiFormatTxt", id, "apiFormatInt") VALUES ('pluriel', true, 'number', NULL, 7, 2);
INSERT INTO "initialState"."checkedState" (value, status, category, "apiFormatTxt", id, "apiFormatInt") VALUES ('présent', true, 'tense', 'présent', 8, NULL);
INSERT INTO "initialState"."checkedState" (value, status, category, "apiFormatTxt", id, "apiFormatInt") VALUES ('passé composé', true, 'tense', 'passé-composé', 9, NULL);


--
-- TOC entry 3321 (class 0 OID 24658)
-- Dependencies: 210
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: verb_library; Owner: postgres
--

INSERT INTO verb_library._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('1c0b8da8-8622-4109-816c-9ced398b20cd', 'f9dd4da763e374bef2d94d3a9c934963adfc7a657c627ce7cc96f7e651d0be32', '2023-09-21 05:19:51.805509-04', '20230921091951_newmigration', NULL, NULL, '2023-09-21 05:19:51.78225-04', 1);


--
-- TOC entry 3323 (class 0 OID 24672)
-- Dependencies: 212
-- Data for Name: verbs; Type: TABLE DATA; Schema: verb_library; Owner: postgres
--

INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (3, 'aimer', 'aimer', 3, 'group 1', 't', NULL, NULL, 't');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (4, 'créer', 'créer', 3, 'group 1', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (5, 'apprécier', 'apprécier', 3, 'group 1', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (6, 'payer', 'payer', 3, 'group 1', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (7, 'placer', 'placer', 4, 'group 1', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (8, 'manger', 'manger', 5, 'group 1', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (9, 'broyer', 'broyer', 6, 'group 1', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (10, 'envoyer', 'envoyer', 7, 'group 1', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (11, 'dépecer', 'dépecer', 8, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (12, 'modeler', 'modeler', 9, 'group 1', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (14, 'rappeler', 'rappeler', 10, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (15, 'semer', 'semer', 11, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (16, 'amener', 'amener', 12, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (17, 'receper', 'receper', 13, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (18, 'peser', 'peser', 14, 'group 1', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (19, 'acheter', 'acheter', 15, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (20, 'jeter', 'jeter', 16, 'group 1', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (21, 'lever', 'lever', 17, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (22, 'cléber', 'cléber', 18, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (23, 'rapiécer', 'rapiécer', 19, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (13, 'céder', 'céder', 20, 'group 1', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (24, 'assiéger', 'assiéger', 21, 'group 1', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (25, 'galéjer', 'galéjer', 22, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (26, 'révéler', 'révéler', 23, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (27, 'écrémer', 'écrémer', 24, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (28, 'aliéner', 'aliéner', 25, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (29, 'recéper', 'recéper', 26, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (30, 'gérer', 'gérer', 27, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (31, 'léser', 'léser', 28, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (32, 'inquiéter', 'inquiéter', 29, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (33, 'faséyer', 'faséyer', 30, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (34, 'sevrer', 'sevrer', 31, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (35, 'célébrer', 'célébrer', 32, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (36, 'lécher', 'lécher', 33, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (37, 'exécrer', 'exécrer', 34, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (38, 'régler', 'régler', 35, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (39, 'régner', 'régner', 36, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (40, 'intégrer', 'intégrer', 37, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (41, 'léguer', 'léguer', 38, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (42, 'disséquer', 'disséquer', 39, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (43, 'pénétrer', 'pénétrer', 40, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (44, 'enfiévrer', 'enfiévrer', 41, 'group 1', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (45, 'aller', 'aller', 42, 'group 1', 't', NULL, 'être', 't');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (46, 'finir', 'finir', 43, 'group 2', 't', NULL, NULL, 't');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (47, 'haïr', 'haïr', 44, 'group 2', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (48, 'amuïr', 'amuïr', 45, 'group 2', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (49, 'dormir', 'dormir', 46, 'group 3 -ir', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (50, 'fleurir', 'fleurir', 47, 'group 3 -ir', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (51, 'courir', 'courir', 48, 'group 3 -ir', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (53, 'couvrir', 'couvrir', 50, 'group 3 -ir', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (52, 'mourir', 'mourir', 49, 'group 3 -ir', 't', NULL, 'être', 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (54, 'vêtir', 'vêtir', 51, 'group 3 -ir', 't', NULL, 'avoir', 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (55, 'sentir', 'sentir', 52, 'group 3 -ir', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (56, 'servir', 'servir', 53, 'group 3 -ir', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (57, 'fuir', 'fuir', 54, 'group 3 -ir', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (58, 'ouïr', 'ouïr', 55, 'group 3 -ir', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (59, 'tenir', 'tenir', 56, 'group 3 -ir', 't', NULL, NULL, 't');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (60, 'acquérir', 'acquérir', 57, 'group 3 -ir', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (62, 'faillir', 'faillir', 59, 'group 3 -ir', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (63, 'assaillir', 'assaillir', 60, 'group 3 -ir', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (64, 'cueillir', 'cueillir', 61, 'group 3 -ir', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (65, 'bouillir', 'bouillir', 62, 'group 3 -ir', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (66, 'valoir', 'valoir', 63, 'group 3 -ior', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (67, 'prévaloir', 'prévaloir', 64, 'group 3 -ior', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (69, 'falloir', 'falloir', 66, 'group 3 -ior', 't', 'impersonal', NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (70, 'vouloir', 'vouloir', 67, 'group 3 -ior', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (71, 'apparoir', 'apparoir', 68, 'group 3 -oir', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (72, 'voir', 'voir', 69, 'group 3 -ior', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (73, 'prévoir', 'prévoir', 70, 'group 3 -ior', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (74, 'savoir', 'savoir', 71, 'group 3 -ior', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (75, 'recevoir', 'recevoir', 72, 'group 3 -ior', 't', NULL, NULL, 't');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (76, 'devoir', 'devoir', 73, 'group 3 -ior', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (77, 'pourvoir', 'pourvoir', 74, 'group 3 -ior', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (78, 'pleuvoir', 'pleuvoir', 75, 'group 3 -ior', 't', 'impersonal', NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (79, 'mouvoir', 'mouvoir', 76, 'group 3 -ior', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (80, 'émouvoir', 'émouvoir', 77, 'group 3 -ior', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (81, 'pouvoir', 'pouvoir', 78, 'group 3 -ior', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (82, 'seoir', 'seoir', 79, 'group 3 -ior', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (83, 'asseoir', 'asseoir', 80, 'group 3 -ior', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (84, 'surseoir', 'surseoir', 81, 'group 3 -ior', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (85, 'choir', 'choir', 82, 'group 3 -ior', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (86, 'échoir', 'échoir', 83, 'group 3 -ior', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (87, 'déchoir', 'déchoir', 84, 'group 3 -ior', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (88, 'vaincre', 'vaincre', 85, 'group 3 -re', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (89, 'rendre', 'rendre', 86, 'group 3 -re', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (90, 'prendre', 'prendre', 87, 'group 3 -re', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (91, 'joindre', 'joindre', 88, 'group 3 -re', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (92, 'peindre', 'peindre', 88, 'group 3 -re', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (94, 'coudre', 'coudre', 90, 'group 3 -re', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (95, 'moudre', 'moudre', 91, 'group 3 -re', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (96, 'absoudre', 'absoudre', 92, 'group 3 -re', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (97, 'résoudre', 'résoudre', 93, 'group 3 -re', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (98, 'rompre', 'rompre', 94, 'group 3 -re', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (99, 'battre', 'battre', 95, 'group 3 -re', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (100, 'mettre', 'mettre', 96, 'group 3 -re', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (101, 'foutre', 'foutre', 97, 'group 3 -re', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (102, 'suivre', 'suivre', 98, 'group 3 -re', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (103, 'vivre', 'vivre', 99, 'group 3 -re', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (104, 'circoncire', 'circoncire', 100, 'group 3 -re', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (106, 'maudire', 'maudire', 102, 'group 3 -re', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (2, 'être', 'être', 2, 'auxiliary', 't', 'auxiliary', NULL, 't');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (105, 'dire', 'dire ', 101, 'group 3 -re', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (107, 'suffire', 'suffire', 103, 'group 3 -re', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (108, 'confire', 'confire', 104, 'group 3 -re', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (109, 'lire', 'lire', 105, 'group 3 -re', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (110, 'rire', 'rire', 106, 'group 3 -re', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (111, 'écrire', 'écrire', 107, 'group 3 -re', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (112, 'frire', 'frire', 108, 'group 3 -re', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (113, 'cuire', 'cuire', 109, 'group 3 -re', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (114, 'luire', 'luire', 110, 'group 3 -re', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (116, 'clore', 'clore', 112, 'group 3 -re', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (119, 'inclure', 'inclure', 115, 'group 3 -re', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (120, 'conclure', 'conclure', 116, 'group 3 -re', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (122, 'faire', 'faire', 118, 'group 3 -re', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (124, 'plaire', 'plaire', 120, 'group 3 -re', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (125, 'traire', 'traire', 121, 'group 3 -re', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (126, 'taire', 'taire', 122, 'group 3 -re', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (127, 'boire', 'boire', 123, 'group 3 -re', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (128, 'croire', 'croire', 124, 'group 3 -re', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (129, 'naître', 'naître', 125, 'group 3 -re', 't', NULL, 'être', 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (130, 'repaître', 'repaître', 126, 'group 3 -re', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (131, 'connaître', 'connaître', 126, 'group 3 -re', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (132, 'paître', 'paître', 127, 'group 3 -re', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (133, 'croître', 'croître', 128, 'group 3 -re', 't', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (134, 'accroître', 'accroître', 129, 'group 3 -re', 'f', NULL, NULL, 'f');
INSERT INTO verb_library.verbs (id, value, label, "verbID", "verbGroup", "primaryVerb", "specialVerb", "auxiliaryVerb", "initialVerb") VALUES (1, 'avoir', 'avoir', 1, 'auxiliary', 't', 'auxiliary', NULL, 't');


--
-- TOC entry 3331 (class 0 OID 0)
-- Dependencies: 211
-- Name: verbs_id_seq; Type: SEQUENCE SET; Schema: verb_library; Owner: postgres
--

SELECT pg_catalog.setval('verb_library.verbs_id_seq', 1, false);


-- Completed on 2024-12-29 20:32:38

--
-- PostgreSQL database dump complete
--

