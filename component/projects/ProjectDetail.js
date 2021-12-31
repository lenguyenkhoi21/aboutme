import React from 'react'
import ProjectContent from './ProjectContent'
import ProjectImage from './ProjectImage'

const ProjectDetail = () => {
	const projects = [
		{
			title: 'Zuzul E-Commercial System',
			technology: [
				{
					type: 'Front-end',
					data: [
						{
							name: 'Next.JS'
						},
						{
							name: 'React'
						},
						{
							name: 'Tailwind CSS'
						},
						{
							name: 'Boostrap'
						}
					]
				},
				{
					type: 'Back-end',
					data: [
						{
							name: 'Microservices with Spring boot base on Netflix Stack (Eureka, Resilience4j, Spring Cloud Gateway, Spring Sleuth, Spring Cloud Commons)'
						},
						{
							name: 'ExpressJS'
						}
					]
				},
				{
					type: 'Build-tool',
					data: [
						{
							name: 'Gradle'
						}
					]
				},
				{
					type: 'Database',
					data: [
						{
							name: 'MySQL'
						},
						{
							name: 'PostgresSQL'
						},
						{
							name: 'Neo4J'
						},
						{
							name: 'Cassandra'
						},
						{
							name: 'Elasticsearch'
						},
						{
							name: 'MongoDB'
						},
						{
							name: 'Redis'
						}
					]
				},
				{
					type: 'Infrastructure',
					data: [
						{
							name: 'Docker'
						},
						{
							name: 'AWS S3'
						},
						{
							name: 'Keycloak'
						},
						{
							name: 'Apache Kafka'
						},
						{
							name: 'ELK Stack'
						},
						{
							name: 'OpenZipkin'
						}
					]
				}
			],
			repo: [
				{
					name: 'Zuzul System',
					link: 'https://github.com/lenguyenkhoi21/zuzul-system'
				},
				{
					name: 'Zuzul Configuration',
					link: 'https://github.com/lenguyenkhoi21/Zuzul-Config-System-'
				}
			],
			image: '/working1.png'
		},
		{
			title: 'Shopping System',
			technology: [
				{
					type: 'Mobile-app',
					data: [
						{
							name: 'React Native'
						},
						{
							name: 'React Navigation'
						}
					]
				},
				{
					type: 'Front-end',
					data: [
						{
							name: 'Next.JS'
						},
						{
							name: 'Boostrap'
						}
					]
				},
				{
					type: 'Back-end',
					data: [
						{
							name: 'Spring Boot'
						}
					]
				},
				{
					type: 'Build-tool',
					data: [
						{
							name: 'Gradle'
						}
					]
				},
				{
					type: 'Database',
					data: [
						{
							name: 'MySQL'
						},
						{
							name: 'MongoDB'
						}
					]
				}
			],
			repo: [
				{
					name: 'App',
					link: 'https://github.com/lenguyenkhoi21/shoppingsystem_app'
				},
				{
					name: 'Web',
					link: 'https://github.com/lenguyenkhoi21/shopping_web'
				},
				{
					name: 'Back-end',
					link: 'https://github.com/lenguyenkhoi21/shoppingsystem_backend'
				}
			],
			image: '/working2.png'
		},
		{
			title: 'Shopping Web',
			technology: [
				{
					type: 'Front-end',
					data: [
						{
							name: 'JSP'
						},
						{
							name: 'HTML'
						},
						{
							name: 'CSS'
						},
						{
							name: 'JavaScript'
						}
					]
				},
				{
					type: 'Back-end',
					data: [
						{
							name: 'Servlet With Tomcat Container'
						},
						{
							name: 'Hibernate'
						}
					]
				},
				{
					type: 'Database',
					data: [
						{
							name: 'SQL Server'
						}
					]
				}
			],
			repo: [
				{
					name: 'Web',
					link: 'https://github.com/lenguyenkhoi21/project_java_web_app'
				}
			],
			image: '/working3.png'
		}
	]

	return (
		<>
			{projects.map((project, index) => {
				if (index % 2 === 0) {
					return (
						<React.Fragment key={index}>
							<div className={'row g-0 div-ProjectDetail-container'}>
								<ProjectContent project={project} />
								<ProjectImage project={project} />
							</div>
						</React.Fragment>
					)
				} else {
					return (
						<React.Fragment key={index}>
							<div className={'row g-0 div-ProjectDetail-container'}>
								<ProjectImage project={project} />
								<ProjectContent project={project} />
							</div>
						</React.Fragment>
					)
				}
			})}
			<style jsx>{`
				.div-ProjectDetail-container {
					display: flex;
					justify-content: center;
					align-items: center;
				}
			`}</style>
		</>
	)
}

export default ProjectDetail
