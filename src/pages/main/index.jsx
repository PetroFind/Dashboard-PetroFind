import React from 'react';

import { MdFilterAlt, MdTranslate } from 'react-icons/md';

import { Container, Header, HeaderButton, Navigation, GraphRow, LineChartBox, Box, MapBox, InfoBox, InfoItem, SecondaryGraphRow, TertiaryGraphRow } from './styles';

import GraphItem from './components/graphItem';
import GraphBox from './components/graphBox';
import Title from './components/title';

import Layout from '../../components/layout';

import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

import sourceData from './data/sourceData.json';
import productionData from './data/productionData.json';

const Main = () => {

    const headerButtons = [
        {
            name: "filtro",
            icon: <MdFilterAlt size={24}/>
        },
        {
            name: "PT_BR",
            icon: <MdTranslate size={24}/>
        }
    ]

    const graphRowItems = [
        {
            title: "Lorem Ipsum",
            percentage: "0.000",
            status: "ok",
            footer: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
            title: "Lorem Ipsum",
            percentage: "0.000",
            status: "ok",
            footer: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
            title: "Lorem Ipsum",
            percentage: "0.000",
            status: "ok",
            footer: "Lorem Ipsum is simply dummy text of the printing",
        },
    ]

    const mapBoxItems = [
        {
            title: "título",
            percentage: "0.0",
        },
        {
            title: "título",
            percentage: "0.0",
        },
        {
            title: "título",
            percentage: "0.0",
        },
        {
            title: "título",
            percentage: "0.0",
        },
    ]

    const infoItemData = [
        {
            header: "Lorem Ipsum is simply",
            percentage: "00%",
            footer: "Lorem Ipsum is simply"
        },
        {
            header: "Lorem Ipsum is simply",
            percentage: "00%",
            footer: "Lorem Ipsum is simply"
        },
        {
            header: "Lorem Ipsum is simply",
            percentage: "00%",
            footer: "Lorem Ipsum is simply"
        },
        {
            header: "Lorem Ipsum is simply",
            percentage: "00%",
            footer: "Lorem Ipsum is simply"
        },
    ]

    return (
        <Layout>
            <Container>
                <Header>
                    {
                        headerButtons.map((item, index) => {
                            return (
                                <HeaderButton key={index}>
                                    {item.icon}
                                    {item.name}
                                </HeaderButton>

                            )
                        })
                    }
                </Header>
                <Navigation />
                <GraphRow>

                    {
                        graphRowItems.map((item, index) => {
                            return (
                                <GraphBox key={index} height="40vh" width="calc(100% / 3)">
                                    {item.title}
                                </GraphBox>
                            )
                        })
                    }
                </GraphRow>
                <LineChartBox>
                    <section>
                        <Line
                            data={{
                                labels: productionData.map((data) => data.label),
                                datasets: [
                                    {
                                        label: "Produção de Óleo",
                                        data: productionData.map((data) => data.value),
                                    },
                                ],
                            }}
                        />
                    </section>
                    <Box></Box>
                    <section>
                    <Line
                            data={{
                                labels: productionData.map((data) => data.label),
                                datasets: [
                                    {
                                        label: "Produção de Gás",
                                        data: productionData.map((data) => data.value),
                                    },
                                ],
                            }}
                        />
                    </section>
                </LineChartBox>
                <MapBox>
                    <section>

                        {
                            mapBoxItems.map((item, index) => {
                                return (
                                    <GraphBox key={index} height="15vh" width="calc(100% / 4)">
                                        {item.title}
                                        {item.percentage}
                                    </GraphBox>
                                )
                            })
                        }
                    </section>
                </MapBox>
                <InfoBox>
                    {
                        infoItemData.map((item, index) => {
                            return (
                                <InfoItem key={index}>
                                    {item.header}
                                </InfoItem>
                            )
                        })
                    }

                </InfoBox>
                <SecondaryGraphRow>

                    <GraphBox height="100%" width="60%">
                        <Title />
                    </GraphBox>
                    <GraphBox height="100%" width="40%">
                        <Title title="Produção de barris por bacia" />
                        <div style={{ width: '', height: '60%', display: 'grid', placeItems: 'center', margin: 'auto' }}>
                            <Doughnut
                                data={{
                                    datasets: [
                                        {
                                            data: sourceData.map((data) => data.value),
                                        },
                                    ],
                                }}
                            />
                        </div>
                        <section style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            {sourceData.map((item, index) => {
                                return (
                                    <GraphItem key={index} value={item.value} text={item.label} />
                                )
                            })}
                        </section>
                    </GraphBox>
                </SecondaryGraphRow>
                <TertiaryGraphRow>
                    <Title />
                </TertiaryGraphRow>
            </Container>
        </Layout>
    )
}

export default Main